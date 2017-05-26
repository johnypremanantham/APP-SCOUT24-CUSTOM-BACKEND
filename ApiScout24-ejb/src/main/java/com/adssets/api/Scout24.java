/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.api;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import javax.ejb.Singleton;
import javax.ejb.Stateful;

import oauth.signpost.OAuth;
import oauth.signpost.OAuthConsumer;
import oauth.signpost.OAuthProvider;
import oauth.signpost.basic.DefaultOAuthConsumer;
import oauth.signpost.basic.DefaultOAuthProvider;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;

/**
 *
 * @author dbr
 */
//@Stateful
@Singleton
public class Scout24 implements Scout24Local {

    private String SERVER = "http://rest.immobilienscout24.de";
    private String OAUTH_SECURITY_PREFIX = "/restapi/security/oauth/";
    private String AUTHORIZATION_ENDPOINT = SERVER + OAUTH_SECURITY_PREFIX + "confirm_access";
    private String ACCESS_TOKEN_ENDPOINT = SERVER + OAUTH_SECURITY_PREFIX + "access_token";
    private String REQUEST_TOKEN_ENDPOINT = SERVER + OAUTH_SECURITY_PREFIX + "request_token";
    private String CONSUMER_KEY = "Adssets Feed AdKey";

    // e. g. a system identifier 
    private String CONSUMER_SECRET = "jJk13efcV6WtxzhA";
    // technical and business context of the search webservice
//    private String SEARCH_PREFIX = "/restapi/api" + "/search/v1.0";
//    private String SEARCH_PREFIX = "/restapi/api" + "/financing/construction" + "/v2/offer/";
    private String SEARCH_PREFIX = "/restapi/api/search/v1.0/expose/";

    private String OAUTH_TOKEN = "b32e8a89-1e66-48cf-9c7c-3edcb2e21d77";
    private String OAUTH_SECRET = "laie8UrcB4hSTC70DPjhznBlbFPxlFNM0Fc9A/zFxIbt37BRceWZWMSCn8N2ak7N46XdX6s7KZDL7XfNvSn8KGXE/kiWBsfLRnQcmXWjLjI=";

    OAuthConsumer consumer;
    OAuthProvider provider;

    public String pin;

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @Override
    public String authenticate() {

        try {

            consumer = new DefaultOAuthConsumer(CONSUMER_KEY, CONSUMER_SECRET);

            provider = new DefaultOAuthProvider(REQUEST_TOKEN_ENDPOINT, ACCESS_TOKEN_ENDPOINT, AUTHORIZATION_ENDPOINT);

            System.out.println("Fetching request token from " + REQUEST_TOKEN_ENDPOINT);

            String authUrl = provider.retrieveRequestToken(consumer, OAuth.OUT_OF_BAND);

            System.out.println("Request token: " + consumer.getToken());
            OAUTH_TOKEN = consumer.getToken();

            System.out.println("Token secret: " + consumer.getTokenSecret());
            OAUTH_SECRET = consumer.getTokenSecret();

            System.out.println("Please visit " + authUrl + ",\nlogin or register and grant " + "this application authorization. Please copy the PIN code to " + "obtain an access token.");

            return authUrl;

        } catch (Exception e) {

            e.printStackTrace();

        }
        return "";
    }

    @Override
    public String validatePin(String pin) {
        this.pin = pin;
        try {
            provider.retrieveAccessToken(consumer, this.pin);
            return "true";
        } catch (Exception e) {

            e.printStackTrace();

        }
        return "false";

    }

    @Override
    public String getApartments(String objectId) {
        try {
            // Make an API call... it is required to sign each request (see below)  
            //1276
//            URL url = new URL("http://rest.immobilienscout24.de/restapi/api/search/v1.0/search/region?realestatetype=apartmentbuy&geocodes=" + regionid );
            URL url = new URL("https://rest.immobilienscout24.de/restapi/api/search/v1.0/expose/" + objectId);
            HttpURLConnection requestUrl = null;
            requestUrl = (HttpURLConnection) url.openConnection();

            consumer.sign(requestUrl);

//            System.out.println("Sending request...");
            requestUrl.connect();

//            System.out.println("Expiration " + requestUrl.getExpiration());
//
//            System.out.println("Timeout " + requestUrl.getConnectTimeout());
//
//            System.out.println("URL " + requestUrl.getURL());
//
//            System.out.println("Method " + requestUrl.getRequestMethod());
//
//            System.out.println("Response: " + requestUrl.getResponseCode() + " " + requestUrl.getResponseMessage());
            BufferedReader br = new BufferedReader(new InputStreamReader(requestUrl.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line;

            switch (requestUrl.getResponseCode()) {
                case 200:
                    while ((line = br.readLine()) != null) {
                        sb.append(line + "\n");
                    }
                    br.close();

                    try {

                        JSONObject outObj = XML.toJSONObject(sb.toString());
                        JsonParser parser = new JsonParser();

                        Object objPrice = new Object();
                        JsonObject objPriceJson = new JsonObject();
//                        JSONObject objTitlePicture = new JSONObject();
                        JSONArray objAllPictures = new JSONArray();
                        JSONObject objAdPicture = new JSONObject();
                        JSONObject objAddress = new JSONObject();
                        Object objPricem2 = new Object();
                        JsonObject objPricem2Json = new JsonObject();
                        JSONObject objLivingspace = new JSONObject();
                        JSONObject obj = new JSONObject();

//                        System.out.println(outObj.toString());
                        objPrice = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").get("calculatedPrice");  //price

                        objPriceJson = parser.parse(objPrice.toString()).getAsJsonObject();

//                        objTitlePicture = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").getJSONObject("titlePicture").getJSONObject("urls")
//                                .getJSONArray("url").getJSONObject(1);
                        objAllPictures = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").getJSONObject("attachments").getJSONArray("attachment");
                        objAdPicture = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").getJSONObject("titlePicture").getJSONObject("urls")
                                .getJSONArray("url").getJSONObject(4);
                        objAddress = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").getJSONObject("address");

                        objPricem2 = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").get("price");
                        objPricem2Json = parser.parse(objPricem2.toString()).getAsJsonObject();

                        obj.put("price", objPrice);
                        obj.put("allpictures", objAllPictures);
                        obj.put("adpicture", objAdPicture);
                        obj.put("address", objAddress);
                        obj.put("livingspace", (int) Math.round((Double.parseDouble(objPriceJson.get("value").getAsString()) / Double.parseDouble(objPricem2Json.get("value").getAsString()))));

                        return obj.toString();  //obj
                    } catch (JSONException je) {
                        je.printStackTrace();
                        return "{\"error\":2}";
                    }
                case 201:
                    while ((line = br.readLine()) != null) {
                        sb.append(line + "\n");
                    }
                    br.close();

                    try {
                        JSONObject outObj = XML.toJSONObject(sb.toString());
                        return outObj.toString();
                    } catch (JSONException je) {
                        je.printStackTrace();
                        return "{\"error\":2}";

                    }
            }

        } catch (Exception e) {

            e.printStackTrace();

        }

        return "{\"error\":1}";
    }

    @Override
    public String getLoans(String postalcode, String suburb) {
        try {
            // Make an API call... it is required to sign each request (see below)  
            Boolean getGeoCode = false;
            URL url;
            if (postalcode != null) {
                url = new URL("http://rest.immobilienscout24.de/restapi/api/financing/construction/v2/offer?postalcode=" + postalcode);
            } else if (suburb != null) {
                getGeoCode = true;
                suburb = suburb.replace("_", "*");
                url = new URL("https://rest.immobilienscout24.de/restapi/api/search/v1.0/region?q=" + suburb);
            } else {
                url = new URL("http://rest.immobilienscout24.de/restapi/api/financing/construction/v2/offer");
            }

            HttpURLConnection requestUrl = null;
            requestUrl = (HttpURLConnection) url.openConnection();
            consumer.sign(requestUrl);
            requestUrl.connect();

            BufferedReader br = new BufferedReader(new InputStreamReader(requestUrl.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line;

            switch (requestUrl.getResponseCode()) {
                case 200:
                    while ((line = br.readLine()) != null) {
                        sb.append(line + "\n");
                    }
                    br.close();

                    try {
                        JsonParser parser = new JsonParser();

                        JsonObject outObj = parser.parse(sb.toString()).getAsJsonObject();
                        //If a suburb is sent, get the geocode for that suburb
                        if (getGeoCode) {
                            System.out.println("GETGEOCODE");
                            //Get geoCodeId
                            System.out.println(outObj.toString());
                            String geoCodeId = outObj.get("region.regions").getAsJsonArray().get(0).getAsJsonObject().get("region").getAsJsonArray().get(0)
                                    .getAsJsonObject().get("geoCodeId").getAsString();

                            System.out.println(geoCodeId);
                            //1276003001003  1276003001 
                            url = new URL("http://rest.immobilienscout24.de/restapi/api/financing/construction/v2/offer?geocode=" + geoCodeId);
                            requestUrl = null;
                            requestUrl = (HttpURLConnection) url.openConnection();
                            consumer.sign(requestUrl);
                            requestUrl.connect();
                            br = new BufferedReader(new InputStreamReader(requestUrl.getInputStream()));
                            sb = new StringBuilder();
                            while ((line = br.readLine()) != null) {
                                sb.append(line + "\n");
                            }
                            outObj = parser.parse(sb.toString()).getAsJsonObject();
                            return sortData(outObj);

                        } else {

                            return sortData(outObj);
                        }

                    } catch (JSONException je) {
                        je.printStackTrace();
                        return "{\"error\":2}";
                    }
                case 201:
                    while ((line = br.readLine()) != null) {
                        sb.append(line + "\n");
                    }
                    br.close();

                    try {
                        JSONObject outObj = XML.toJSONObject(sb.toString());
                        return outObj.toString();
                    } catch (JSONException je) {
                        je.printStackTrace();
                        return "{\"error\":2}";

                    }
            }

        } catch (Exception e) {

            e.printStackTrace();

        }

        return "{\"error\":1}";
    }

    public String sortData(JsonObject outObj) {
        List<JsonObject> jsonValues = new ArrayList<>();

        for (int i = 0; i < outObj.get("offer").getAsJsonArray().size(); i++) {
            if (outObj.get("offer").getAsJsonArray().get(i).getAsJsonObject().has("amortizationData")) {
            JsonObject obj = new JsonObject();
            obj.add("amortizationData", outObj.get("offer").getAsJsonArray().get(i).getAsJsonObject().get("amortizationData"));
            obj.add("distanceToSearchLocation", outObj.get("offer").getAsJsonArray().get(i).getAsJsonObject().get("distanceToSearchLocation"));
            obj.add("logo", outObj.get("offer").getAsJsonArray().get(i).getAsJsonObject().get("mortgageProvider").getAsJsonObject().get("logo"));
            obj.add("landingPageUrl", outObj.get("offer").getAsJsonArray().get(i).getAsJsonObject().get("mortgageProvider").getAsJsonObject().get("landingPageUrl"));
            obj.add("footnote", outObj.get("offer").getAsJsonArray().get(i).getAsJsonObject().get("footnote"));
            jsonValues.add(obj);
            }
        }
        Collections.sort(jsonValues, new Comparator<JsonObject>() {
            private static final String KEY_NAME = "distanceToSearchLocation";

            @Override
            public int compare(JsonObject a, JsonObject b) {
                int valA;
                int valB;

                try {
                    valA = (Integer) a.get(KEY_NAME).getAsInt();
                    valB = (Integer) b.get(KEY_NAME).getAsInt();
                    return valA - valB;
                } catch (Exception e) {
                    System.err.println(e);
                }
                return -1;
            }
        });
        
        return jsonValues.toString();
    }

    @Override
    public String getPin() {
        System.out.println(this.pin);
        return this.pin;
    }

}
