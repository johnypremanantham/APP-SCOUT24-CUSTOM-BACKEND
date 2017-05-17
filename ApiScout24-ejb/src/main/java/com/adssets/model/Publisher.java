/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.model;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author adssets
 */
@Entity
@Table(name = "publisher")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Publisher.findAll", query = "SELECT p FROM Publisher p"),
    @NamedQuery(name = "Publisher.findById", query = "SELECT p FROM Publisher p WHERE p.id = :id"),
    @NamedQuery(name = "Publisher.findByName", query = "SELECT p FROM Publisher p WHERE p.name = :name"),
    @NamedQuery(name = "Publisher.findByBannerIdOffset", query = "SELECT p FROM Publisher p WHERE p.bannerIdOffset = :bannerIdOffset"),
    @NamedQuery(name = "Publisher.findByCallingScript", query = "SELECT p FROM Publisher p WHERE p.callingScript = :callingScript"),
    @NamedQuery(name = "Publisher.findByServer", query = "SELECT p FROM Publisher p WHERE p.server = :server"),
    @NamedQuery(name = "Publisher.findByDemoDomain", query = "SELECT p FROM Publisher p WHERE p.demoDomain = :demoDomain"),
    @NamedQuery(name = "Publisher.findByVastXmlTemplate", query = "SELECT p FROM Publisher p WHERE p.vastXmlTemplate = :vastXmlTemplate"),
    @NamedQuery(name = "Publisher.findByVpaidTemplate", query = "SELECT p FROM Publisher p WHERE p.vpaidTemplate = :vpaidTemplate"),
    @NamedQuery(name = "Publisher.findByVpaidVastTemplate", query = "SELECT p FROM Publisher p WHERE p.vpaidVastTemplate = :vpaidVastTemplate")})
public class Publisher implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Long id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "name")
    private String name;
    @Basic(optional = false)
    @NotNull
    @Column(name = "bannerIdOffset")
    private int bannerIdOffset;
    @Lob
    @Size(max = 16777215)
    @Column(name = "loadingScript")
    private String loadingScript;
    @Lob
    @Size(max = 65535)
    @Column(name = "tagList")
    private String tagList;
    @Size(max = 2048)
    @Column(name = "callingScript")
    private String callingScript;
    @Size(max = 45)
    @Column(name = "server")
    private String server;
    @Size(max = 45)
    @Column(name = "demoDomain")
    private String demoDomain;
    @Column(name = "vast_xml_template")
    private Integer vastXmlTemplate;
    @Column(name = "vpaid_template")
    private Integer vpaidTemplate;
    @Column(name = "vpaid_vast_template")
    private Integer vpaidVastTemplate;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ispublisher")
    private Collection<User> userCollection;

    public Publisher() {
    }

    public Publisher(Long id) {
        this.id = id;
    }

    public Publisher(Long id, String name, int bannerIdOffset) {
        this.id = id;
        this.name = name;
        this.bannerIdOffset = bannerIdOffset;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBannerIdOffset() {
        return bannerIdOffset;
    }

    public void setBannerIdOffset(int bannerIdOffset) {
        this.bannerIdOffset = bannerIdOffset;
    }

    public String getLoadingScript() {
        return loadingScript;
    }

    public void setLoadingScript(String loadingScript) {
        this.loadingScript = loadingScript;
    }

    public String getTagList() {
        return tagList;
    }

    public void setTagList(String tagList) {
        this.tagList = tagList;
    }

    public String getCallingScript() {
        return callingScript;
    }

    public void setCallingScript(String callingScript) {
        this.callingScript = callingScript;
    }

    public String getServer() {
        return server;
    }

    public void setServer(String server) {
        this.server = server;
    }

    public String getDemoDomain() {
        return demoDomain;
    }

    public void setDemoDomain(String demoDomain) {
        this.demoDomain = demoDomain;
    }

    public Integer getVastXmlTemplate() {
        return vastXmlTemplate;
    }

    public void setVastXmlTemplate(Integer vastXmlTemplate) {
        this.vastXmlTemplate = vastXmlTemplate;
    }

    public Integer getVpaidTemplate() {
        return vpaidTemplate;
    }

    public void setVpaidTemplate(Integer vpaidTemplate) {
        this.vpaidTemplate = vpaidTemplate;
    }

    public Integer getVpaidVastTemplate() {
        return vpaidVastTemplate;
    }

    public void setVpaidVastTemplate(Integer vpaidVastTemplate) {
        this.vpaidVastTemplate = vpaidVastTemplate;
    }

    @XmlTransient
    public Collection<User> getUserCollection() {
        return userCollection;
    }

    public void setUserCollection(Collection<User> userCollection) {
        this.userCollection = userCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Publisher)) {
            return false;
        }
        Publisher other = (Publisher) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.adssets.model.Publisher[ id=" + id + " ]";
    }
    
}
