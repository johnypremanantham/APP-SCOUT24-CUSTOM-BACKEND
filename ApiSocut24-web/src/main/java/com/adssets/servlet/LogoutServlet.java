package com.adssets.servlet;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class LogoutServlet
 */
@WebServlet(name = "LogoutServlet", urlPatterns = {"/Logout"})
public class LogoutServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
        
    private void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        
        
        Cookie[] cookies = request.getCookies();
    	if(cookies != null){
    	for(Cookie cookie : cookies){
    		if(cookie.getName().equals("JSESSIONID")){
    			System.out.println("JSESSIONID="+cookie.getValue());
    			break;
    		}
    	}
    	}
    	//invalidate the session if exists
    	HttpSession session = request.getSession(true);
    	System.out.println("User="+session.getAttribute("user"));
    	if(session != null){
            try {
    		session.invalidate();
                System.out.println("Session invalidated");  
            }
            catch (NullPointerException ex)
            {
              System.out.println("Could not invalidate session");  
                
            }
    	}
        
        //request.logout();
        
        
        response.sendRedirect("login.html?time=" + new Timestamp((new Date()).getTime()).toString() );
        
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	response.setContentType("text/html");
    	processRequest(request,response);
        //response.sendRedirect("https://bananapc:8080/App-SCM-Api-web/login.html");
    }
    
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	response.setContentType("text/html");
        processRequest(request,response);
//    	Cookie[] cookies = request.getCookies();
//    	if(cookies != null){
//    	for(Cookie cookie : cookies){
//    		if(cookie.getName().equals("JSESSIONID")){
//    			System.out.println("JSESSIONID="+cookie.getValue());
//    			break;
//    		}
//    	}
//    	}
//    	//invalidate the session if exists
//    	HttpSession session = request.getSession(false);
//    	System.out.println("User="+session.getAttribute("user"));
//    	if(session != null){
//    		//session.invalidate();
//    	}
//        
//        request.logout();
        
    	//response.sendRedirect("login.html");
    }

}