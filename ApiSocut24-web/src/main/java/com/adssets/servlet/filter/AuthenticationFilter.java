/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.adssets.servlet.filter;

import com.adssets.facades.ConfigFacadeLocal;
import com.adssets.model.Config;

import java.io.IOException;
import javax.ejb.EJB;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author mans.akerlund
 */
@WebFilter("/AuthenticationFilter")
public class AuthenticationFilter implements Filter{
    
     @EJB
    private ConfigFacadeLocal configFacade;
    
    private ServletContext context;
	
	public void init(FilterConfig fConfig) throws ServletException {
		this.context = fConfig.getServletContext();
		//this.context.log("AuthenticationFilter initialized");
                System.out.println("AuthenticationFilter initialized");
	}
    
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
                 
                //Added for testing acces control allow origin cross domain
                HttpServletResponse http = (HttpServletResponse) response;
                http.addHeader("Access-Control-Allow-Origin", "*");
                
                
                
                // BYPASSES ALL SECURITY TO SIMPLIFY 
               
                // chain.doFilter(request, response);
               
		String uri = req.getRequestURI();
		//this.context.log("Requested Resource::"+uri);
                System.out.println("Requested Resource:"+uri);
		
		HttpSession session = req.getSession(false);
		
		if(session == null && !(uri.endsWith("html") || uri.endsWith("FrontendLogin"))){
			//this.context.log("Unauthorized access request");
                        
			 System.out.println("Processing login logic");
                        if (uri.endsWith("GetDataExtSBTechForAd") || uri.endsWith("GetDataExtSBTechPreviewServlet") || uri.endsWith("Logout"))
                        {
                            System.out.println("Authorized access request (special)");
                            
                            chain.doFilter(request, response);
                        }
                        else
                        {
                            System.out.println("Check if security bypass is active");
                            Config config = configFacade.find("securityByPass");
                            //System.out.println(config.getValue());
                           //System.out.println(config!=null);
                            if (config!=null &&(config.getValue().equals("yes")))
                            {
                                System.out.println("Trying autologin");
                                Config configDefaultUserName = configFacade.find("securityDefaultUserName");
                                Config configDefaultPassword = configFacade.find("securityDefaultPassword");
                                
                                req.login(configDefaultUserName.getValue(),configDefaultPassword.getValue());
                                HttpSession aftersession = req.getSession(false); 
                                
                                if (aftersession == null)
                                { 
                                        System.out.println("Autologin Session is null");
                             
                                }
                                
                                //res.sendRedirect("login.html");
                                chain.doFilter(request, response);
                            }
                            else
                            {
                                System.out.println("Unauthorized access request");
                                res.sendRedirect("login.html");
                            }    
                                
                        }
                        
                        
		}else{
			// pass the request along the filter chain
                        System.out.println("Authorized access request");
                        System.out.println("Session status:");
                        if (session == null)
                            { 
                                System.out.println("Session is null");
                             
                            }
                            
                        else
                            {System.out.println(session);}
                        
                        System.out.println("Dofilter url:" + uri);
                        
			chain.doFilter(request, response);
		}
		
		
	}

	

	public void destroy() {
		//close any resources here
	}

    
}
