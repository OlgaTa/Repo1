<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx">${pageContext.request.contextPath}</c:set>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/common.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="css/autocomplete.css">
	
	<script type="text/javascript" src="js/jquery-1.7.1.js"></script>
	<script type="text/javascript" src="js/jquery.ajaxQueue.1.3.js"></script>
	<script type="text/javascript" src="js/jquery.autocomplete.min.js"></script>
	<script type="text/javascript" src="js/common.js"></script>
	<script type="text/javascript">
		var ctx="${ctx}";
		var placeHolder = "Enter city name";
	</script>
</head>
<body>
<c:if test="${'1' eq '1'}">
something
</c:if>
<br/>
hello: ${ctx}<br/>
	<div class='well'>
		<p><strong>Enter Search Criteria</strong></p>

		<input type="text" class="input-large searchbox" value='${search}'
			name='search' id='search' />
								
		<input type='hidden' name='hiddensearch' id='hiddensearch' /> 
		<button type="submit" class="btn">Search</button> 
	</div>

</body>
</html>
