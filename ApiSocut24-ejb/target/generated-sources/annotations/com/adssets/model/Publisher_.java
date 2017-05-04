package com.adssets.model;

import com.adssets.model.User;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-05-04T15:46:48")
@StaticMetamodel(Publisher.class)
public class Publisher_ { 

    public static volatile SingularAttribute<Publisher, Integer> bannerIdOffset;
    public static volatile SingularAttribute<Publisher, String> tagList;
    public static volatile SingularAttribute<Publisher, String> server;
    public static volatile SingularAttribute<Publisher, String> loadingScript;
    public static volatile CollectionAttribute<Publisher, User> userCollection;
    public static volatile SingularAttribute<Publisher, String> name;
    public static volatile SingularAttribute<Publisher, Integer> vastXmlTemplate;
    public static volatile SingularAttribute<Publisher, Integer> vpaidTemplate;
    public static volatile SingularAttribute<Publisher, Integer> vpaidVastTemplate;
    public static volatile SingularAttribute<Publisher, Long> id;
    public static volatile SingularAttribute<Publisher, String> demoDomain;
    public static volatile SingularAttribute<Publisher, String> callingScript;

}