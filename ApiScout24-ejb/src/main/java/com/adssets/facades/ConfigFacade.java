/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.facades;

import com.adssets.model.Config;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author adssets
 */
@Stateless
public class ConfigFacade extends AbstractFacade<Config> implements ConfigFacadeLocal {

    @PersistenceContext(unitName = "com.adssets_ApiScout24-ejb_ejb_1PU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public ConfigFacade() {
        super(Config.class);
    }
    
}
