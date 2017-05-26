/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.ejb;

import com.adssets.api.Scout24Local;
import com.adssets.facades.FeedFacadeLocal;
import com.adssets.facades.MarketFacadeLocal;
import com.adssets.model.Feed;
import com.adssets.model.Market;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author adssets
 */
@Stateless
public class DataAccess implements DataAccessLocal {

    @EJB
    private FeedFacadeLocal feedFacade;

    @EJB
    private MarketFacadeLocal marketFacade;
    
    @EJB
    private Scout24Local scout24;

    @PersistenceContext(unitName = "com.adssets_ApiScout24-ejb_ejb_1PU")
    private EntityManager em;
    
    

//-----------------MARKET FUNCTIONALITY---------------------------
    @Override
    public String getMarkets() {
        JsonArray jsonArray = new JsonArray();

        List<Market> markets = marketFacade.findAll();
        for (Market market : markets) {
            JsonObject obj = new JsonObject();
            obj.addProperty("id", market.getId());
            obj.addProperty("name", market.getName());
            obj.addProperty("description", market.getDescription());
            jsonArray.add(obj);
        }
        return jsonArray.toString();
    }

        @Override
    public String getMarketByID(String marketId) {
        JsonArray jsonArray = new JsonArray();

        Market market = marketFacade.find(Integer.valueOf(marketId));
       
            JsonObject obj = new JsonObject();
            obj.addProperty("id", market.getId());
            obj.addProperty("name", market.getName());
            obj.addProperty("description", market.getDescription());
            jsonArray.add(obj);
        
        return jsonArray.toString();
    }

    @Override
    public String createMarket(String obj) {
        JsonObject jsonObject = (new JsonParser()).parse(obj).getAsJsonObject();
        Market market = new Market();
        market.setName(jsonObject.get("name").getAsString());
        market.setDescription(jsonObject.get("description").getAsString());
        
        marketFacade.create(market);
        
        JsonArray jsonArray = new JsonArray();
        JsonObject jsonObj = new JsonObject();
            jsonObj.addProperty("id", market.getId());
            jsonObj.addProperty("name", market.getName());
            jsonObj.addProperty("description", market.getDescription());
            jsonArray.add(jsonObj);
        return jsonArray.toString();
    }
    
    
    
    //----------------FEED FUNCTIONALITY---------------------

    @Override
    public String getObjectsByMarket(String marketId) {
         JsonArray jsonArray = new JsonArray();

//        Feed feed = feedFacade.find(marketId);
        Market market = marketFacade.find(Integer.valueOf(marketId));
        
        List<Feed> feeds = em.createNamedQuery("Feed.findByMarketId")
                .setParameter("marketId", market)
                .getResultList();
        
        for (Feed feed : feeds) {
            JsonObject obj = new JsonObject();
            obj.addProperty("id", feed.getId());
            obj.addProperty("marketId", feed.getIdmarket().getId());
            obj.addProperty("json", feed.getJson());
            jsonArray.add(obj);
        }
              
        return jsonArray.toString();
    }

    @Override
    public String createFeed(String obj) {
        JsonObject jsonObject = (new JsonParser()).parse(obj).getAsJsonObject();
        
        Market marketId = marketFacade.find(jsonObject.get("marketId").getAsInt());
        
//        Feed feedCheck = feedFacade.find(marketId);
        List<Feed> feeds = em.createNamedQuery("Feed.findByMarketId")
                .setParameter("marketId", marketId)
                .getResultList();
        Integer feedCheck = null;
        
        if(feeds.size() > 0){
        feedCheck = feeds.get(0).getId();
        }
        
        Feed feed = new Feed();
        feed.setIdmarket(marketId);
        feed.setJson(jsonObject.get("json").getAsJsonArray().toString());
        
        JsonArray jsonArray = new JsonArray();
        JsonObject jsonObj = new JsonObject();
        
        if(feedCheck == null) { 
        feedFacade.create(feed);
            jsonObj.addProperty("id", feed.getId());
            jsonObj.addProperty("marketId", feed.getIdmarket().getId());
            jsonObj.addProperty("json", feed.getJson());
            jsonArray.add(jsonObj);
            return jsonArray.toString();
        }else{
            feed.setId(feedCheck);
            feedFacade.edit(feed);
            jsonObj.addProperty("id", feed.getId());
            jsonObj.addProperty("marketId", feed.getIdmarket().getId());
            jsonObj.addProperty("json", feed.getJson());
            jsonArray.add(jsonObj);
            return jsonArray.toString();
        }            
        
    }
    
    
  

    @Override
    public String buildFeedForMarket(String marketId, String lazyLoad) {
             JsonArray jsonArray = new JsonArray();
             JsonParser parser = new JsonParser(); 

//        Feed feed = feedFacade.find(marketId);
        Market market = marketFacade.find(Integer.valueOf(marketId));
        
        List<Feed> feeds = em.createNamedQuery("Feed.findByMarketId")
                .setParameter("marketId", market)
                .getResultList();
        if(feeds.size() > 0){
        for (Feed feed : feeds) {
            JsonObject obj = new JsonObject();
            obj.addProperty("id", feed.getId());
            obj.addProperty("marketId", feed.getIdmarket().getId());
            obj.addProperty("json", feed.getJson());
            jsonArray.add(obj);
        }
        
        JsonObject obj = jsonArray.get(0).getAsJsonObject();
        String objArray = obj.get("json").getAsString();
        
        JsonArray objArrayParsed = parser.parse(objArray).getAsJsonArray();
        JsonArray objData = new JsonArray();
        
        for (JsonElement objId : objArrayParsed) {   
            JsonObject objElmParsed = parser.parse(objId.toString()).getAsJsonObject();
            System.out.println(objElmParsed);
//            try{
//            isInteger(objId.getAsString());
            String value = objElmParsed.get("type").getAsString();
                System.out.println(value);
            //CHANGE ADPICTURE TO THE PICTURE STORED IN THE DATABASE
            if(value.equals("object")){
            String result = scout24.getApartments(objElmParsed.get("objectid").getAsString());
            JsonObject resultObj = parser.parse(result).getAsJsonObject();
            String link = "{\"link\": \"https://www.immobilienscout24.de/expose/"+objElmParsed.get("objectid").getAsInt()+"?referrer=\"}";
            JsonObject clickLink = parser.parse(link).getAsJsonObject();
            resultObj.add("clickLink", clickLink);
            resultObj.add("objectId", objElmParsed.get("objectid"));
            resultObj.add("marketId", parser.parse(marketId));
            // Use the selected image as ad image
            JsonObject objHref = new JsonObject();
            objHref.add("href", objElmParsed.get("url"));
            resultObj.add("adpicture", objHref);
            //If lazyLoad = yes dont return "allpictures" LazyLoad=yes is the parameter the ad will send so it does not get unneccesary data
            if(lazyLoad.equals("yes")){
               resultObj.remove("allpictures");
            }
            
            
            objData.add(resultObj);
            }else{
                objData.add(objId);
            }
//            }catch(UnsupportedOperationException ex){
//            objData.add(objId);
//            }
            
        }
        return objData.toString();
        }else{
            return new JsonArray().toString();
        }
        
    }
    
    public static boolean isInteger(String s) {
    try { 
        Integer.parseInt(s); 
    } catch(NumberFormatException e) { 
        return false; 
    } catch(NullPointerException e) {
        return false;
    }
    // only got here if we didn't return false
    return true;
}
  
}
