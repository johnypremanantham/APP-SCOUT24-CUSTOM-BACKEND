/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.api;

import com.google.gson.JsonParser;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.ejb.Singleton;
import javax.ejb.Stateful;

import oauth.signpost.OAuth;
import oauth.signpost.OAuthConsumer;
import oauth.signpost.OAuthProvider;
import oauth.signpost.basic.DefaultOAuthConsumer;
import oauth.signpost.basic.DefaultOAuthProvider;
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
    
    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")

    @Override
    public String authenticate() {
        
        try {

            consumer = new DefaultOAuthConsumer(CONSUMER_KEY, CONSUMER_SECRET);

            provider = new DefaultOAuthProvider(REQUEST_TOKEN_ENDPOINT, ACCESS_TOKEN_ENDPOINT, AUTHORIZATION_ENDPOINT);

            System.out.println("Fetching request token from " + REQUEST_TOKEN_ENDPOINT);

            
            String authUrl = provider.retrieveRequestToken(consumer,  OAuth.OUT_OF_BAND);

            System.out.println("Request token: " + consumer.getToken());
            OAUTH_TOKEN =  consumer.getToken();

            System.out.println("Token secret: " + consumer.getTokenSecret());
            OAUTH_SECRET = consumer.getTokenSecret();
            
            System.out.println("Please visit " + authUrl + ",\nlogin or register and grant " + "this application authorization. Please copy the PIN code to " + "obtain an access token.");

            
            return authUrl;
            
        }
        catch (Exception e) {

            e.printStackTrace();

        } 
        return "";
    }

    @Override
    public String validatePin(String pin) {
        
        try{
            provider.retrieveAccessToken(consumer, pin);
            return "true";
        }catch (Exception e) {

            e.printStackTrace();

        } 
        return "false";
        
    }

    @Override
    public String getAppartments(String regionid) {
        System.out.println(regionid);
         try{
        // Make an API call... it is required to sign each request (see below)  
        //1276
//            URL url = new URL("http://rest.immobilienscout24.de/restapi/api/search/v1.0/search/region?realestatetype=apartmentbuy&geocodes=" + regionid );
            URL url = new URL("https://rest.immobilienscout24.de/restapi/api/search/v1.0/expose/"+regionid);
             System.out.println(regionid);
            HttpURLConnection requestUrl = null;
            requestUrl = (HttpURLConnection) url.openConnection();
            
            consumer.sign(requestUrl);

            System.out.println("Sending request...");
            
            requestUrl.connect();

            System.out.println("Expiration " + requestUrl.getExpiration());

            System.out.println("Timeout " + requestUrl.getConnectTimeout());

            System.out.println("URL " + requestUrl.getURL());

            System.out.println("Method " + requestUrl.getRequestMethod());

            System.out.println("Response: " + requestUrl.getResponseCode() + " " + requestUrl.getResponseMessage());
            
            BufferedReader br = new BufferedReader(new InputStreamReader(requestUrl.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line;

            switch (requestUrl.getResponseCode()) {
                case 200:
                    while ((line = br.readLine()) != null) {
                        sb.append(line+"\n");
                    }
                    br.close();
                    
                    try {
                        
                        JSONObject outObj = XML.toJSONObject(sb.toString());
                        JsonParser parser = new JsonParser(); 

                        
                        Object objPrice = new Object();
                        JSONObject objTitlePicture = new JSONObject();
                        JSONObject objAdPicture = new JSONObject();
                        JSONObject objAddress = new JSONObject();
                        Object objLivingSpace = new Object();
                        JSONObject obj = new JSONObject();
                        
//                        System.out.println(outObj.toString());
                                               
                        objPrice = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").get("calculatedPrice");  //price
                        objTitlePicture = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").getJSONObject("titlePicture").getJSONObject("urls")
                                .getJSONArray("url").getJSONObject(1);
                        objAdPicture = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").getJSONObject("titlePicture").getJSONObject("urls")
                                .getJSONArray("url").getJSONObject(4);
                        objAddress = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").getJSONObject("address");
                        objLivingSpace = outObj.getJSONObject("expose:expose").getJSONObject("realEstate").get("minDivisible"); //livingSpace

                        obj.put("price", objPrice);
                        obj.put("titlepicture", objTitlePicture);
                        obj.put("adpicture", objAdPicture);
                        obj.put("address", objAddress);
                        obj.put("livingspace", objLivingSpace);
                            
                        
                        return obj.toString();  //obj
                    }catch(JSONException je){
                        je.printStackTrace();
                        return "{\"error\":2}";
                    }
                case 201:
                    while ((line = br.readLine()) != null) {
                        sb.append(line+"\n");
                    }
                    br.close();
                    
                    try {
                        JSONObject outObj = XML.toJSONObject(sb.toString());
                        return outObj.toString();
                    }catch(JSONException je){
                        je.printStackTrace();
                        return "{\"error\":2}";

                    }
            }
              
            
         }catch (Exception e) {

            e.printStackTrace();

        } 
        
        return "{\"error\":1}";
    }
    
    
    
    
}
