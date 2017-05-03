package com.adssets.model;

import com.adssets.model.Publisher;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-05-03T13:23:25")
@StaticMetamodel(User.class)
public class User_ { 

    public static volatile SingularAttribute<User, String> keypass;
    public static volatile SingularAttribute<User, Long> iduser;
    public static volatile SingularAttribute<User, Publisher> ispublisher;
    public static volatile SingularAttribute<User, String> name;
    public static volatile SingularAttribute<User, String> realname;

}