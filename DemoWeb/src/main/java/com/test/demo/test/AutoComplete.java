package com.test.demo.test;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/autocomplete")
public class AutoComplete {
	@GET	
	@Produces({MediaType.TEXT_PLAIN})
	public String createDataGet(@QueryParam(value = "q") String aQ) {
		
		System.out.println("search: " + aQ);

		if (aQ == null || aQ.equals("")) return "";
		
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < DemoConst.CITY_ARRAY.length; i++) {
			if (DemoConst.CITY_ARRAY[i].toLowerCase().startsWith(aQ.toLowerCase())) {
				if (i > 0) {
					sb.append("\n");
				}				
				sb.append(DemoConst.CITY_ARRAY[i].replace("'", "&#039;"))
				.append("|")
				.append(DemoConst.CITY_ARRAY[i]);
				
				System.out.println("added: " + DemoConst.CITY_ARRAY[i]);
			}
		}
		return sb.toString();
	}

}
