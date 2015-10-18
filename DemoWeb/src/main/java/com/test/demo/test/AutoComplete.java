package com.test.demo.test;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

public class AutoComplete {
	@POST
	@Path("/autocomplete")
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces({MediaType.TEXT_PLAIN})
	public String createData(@Context UriInfo aUriInfo, 
							@Context HttpHeaders aHttpHeaders, 
							@Context HttpServletRequest aRequest,
							String aQuery) {
		return "hello post";
	}

	@GET
	@Path("/autocomplete")
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces({MediaType.TEXT_PLAIN})
	public String createDataGet(@Context UriInfo aUriInfo, 
							@Context HttpHeaders aHttpHeaders, 
							@Context HttpServletRequest aRequest,
							String aQuery) {
		return "hello get";
	}

}
