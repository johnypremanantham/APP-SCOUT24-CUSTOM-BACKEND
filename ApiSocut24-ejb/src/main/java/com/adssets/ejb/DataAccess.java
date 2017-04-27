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

    @PersistenceContext(unitName = "com.adssets_ApiSocut24-ejb_ejb_1PU")
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
    public String buildFeedForMarket(String marketId) {
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
        
        JsonObject obj = jsonArray.get(0).getAsJsonObject();
        String objArray = obj.get("json").getAsString();
        
        
        String[] objIds = objArray.replaceAll("^\\[|\\]$", "").split(",(?=(([^\"]*\"){2})*[^\"]*$)");
        
        JsonArray objData = new JsonArray();
        
        for (String objId : objIds) {
            System.out.println(objId);
            String result = scout24.getAppartments(objId);
            System.out.println(result);
        }

        return jsonArray.toString();
        
    }
  
}
