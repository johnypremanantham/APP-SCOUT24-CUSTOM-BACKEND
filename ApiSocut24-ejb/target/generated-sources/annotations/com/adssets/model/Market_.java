package com.adssets.model;

import com.adssets.model.Feed;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-04-27T15:49:21")
@StaticMetamodel(Market.class)
public class Market_ { 

    public static volatile SingularAttribute<Market, String> name;
    public static volatile SingularAttribute<Market, String> description;
    public static volatile SingularAttribute<Market, Integer> id;
    public static volatile CollectionAttribute<Market, Feed> feedCollection;

}