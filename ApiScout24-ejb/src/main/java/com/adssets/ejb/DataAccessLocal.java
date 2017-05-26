/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.ejb;

import javax.ejb.Local;

/**
 *
 * @author adssets
 */
@Local
public interface DataAccessLocal {
    
    String getMarkets();
    
    String getMarketByID(String marketId);
    
    String createMarket(String obj);
    
    String getObjectsByMarket(String marketId);
    
    String createFeed(String obj);
    
    String buildFeedForMarket(String marketId, String lazyLoad);

    
    
}
