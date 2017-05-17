/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.facades;

import com.adssets.model.Market;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author adssets
 */
@Local
public interface MarketFacadeLocal {

    void create(Market market);

    void edit(Market market);

    void remove(Market market);

    Market find(Object id);

    List<Market> findAll();

    List<Market> findRange(int[] range);

    int count();
    
}
