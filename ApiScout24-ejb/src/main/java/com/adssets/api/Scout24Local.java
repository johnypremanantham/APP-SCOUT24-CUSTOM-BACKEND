/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.api;

import javax.ejb.Local;

/**
 *
 * @author dbr
 */
@Local
public interface Scout24Local {

    String authenticate();

    String validatePin(String pin);

    String getApartments(String objectId);
    
    String getLoans(String postalcode, String suburb);
    
    String getPin();
}
