/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.ejb;

import com.adssets.facades.FeedFacadeLocal;
import com.adssets.facades.MarketFacadeLocal;
import com.adssets.model.Feed;
import com.adssets.model.Market;
import com.google.gson.JsonArray;
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

    @PersistenceContext(unitName = "com.adssets_ApiSocut24-ejb_ejb_1PU")
    private EntityManager em;
    
    

//-----------------MARKET FUNCTIONALITY---------------------------
    @Override
    public String getMarket() {
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
    public String getFeedByMarket(String marketId) {
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
        
        Feed feedCheck = feedFacade.find(marketId.getId());
        
        Feed feed = new Feed();
        feed.setIdmarket(marketId);
        feed.setJson(jsonObject.get("json").toString());
        
        JsonArray jsonArray = new JsonArray();
        JsonObject jsonObj = new JsonObject();
        
        if(feedCheck == null) { 
        feedFacade.create(feed);
        }else{
            feed.setId(feedCheck.getId());
            feedFacade.edit(feed);
        }
        
            jsonObj.addProperty("id", feed.getId());
            jsonObj.addProperty("marketId", feed.getIdmarket().getId());
            jsonObj.addProperty("json", feed.getJson());
            jsonArray.add(jsonObj);
            return jsonArray.toString();
        
    }
  
}
