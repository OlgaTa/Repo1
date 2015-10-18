$(document).ready(function(){
	$('#search').focus();
	$('#search').blur(function() {
		if ($(this).val()=='') {
			$(this).val(placeHolder);
		}
	});
	$('#search').click(function() {
		if ($(this).val()==placeHolder) {
			$(this).val('');
		}
	});
	$('#search').keydown(function() {
		if ($(this).val()==placeHolder) {
			$(this).val('');
		}
	});
	$('#search').keyup(function() {
		cleanResults();
	});
	var myVal = $('#search').val();
	if (myVal=='') {
		$('#search').val(placeHolder);
	}
	//setCursor('search', myVal.length);

    bindAutoComplete();
});
		    
function bindAutoComplete() {
    $("#search").autocomplete(ctx + "/resources/autocomplete", {
        max: 15,
        delay: 100,
        minChars: 2,
        autoFill: false,
        cacheLength: 0,
        selectFirst: false,
        highlight: false,
        multiple: false,
        scroll: false,
        scrollHeight: 10,
        width: 310,
        matchContains: true,
        matchSubset: true,
        extraParams: {
        	accfilter: function() {
        		var s = '';
				$(".accfilter:checked").map(function() { s += ',' + $(this).val(); });
				if(s.length > 0) {s = s.substring(1);}
				return s;
        	}
        },
   		formatItem: function(row) {return row[0].replace('&#039;', "'");},
        formatResult: function(row) {return row[0].replace('&#039;', "'");}
    }).result(function(event,row){
		$("#hiddensearch").val(row[1]);
		wipeResults();
		$("#searchForm").submit();
    });
}

function prepareSearch() {
	startSpinner("spinnerId");
}

function cleanResults() {
	$("#hiddensearch").val('');
	$("#displayDiv").html('');
}

var spinner;
function startSpinner(spinDivId) {
	centerDiv(spinDivId, 10, 10);
	stopSpinner();
	var opts = {
	  lines: 10, // The number of lines to draw
	  length: 7, // The length of each line
	  width: 3, // The line thickness
	  radius: 4, // The radius of the inner circle
	  color: '#000', // #rgb or #rrggbb
	  speed: 1, // Rounds per second
	  trail: 70, // Afterglow percentage
	  shadow: false // Whether to render a shadow
	};
	var target = document.getElementById(spinDivId);
	if (target) {
		spinner = new Spinner(opts).spin(target);
	}
}

function stopSpinner() {
	if (spinner) {
		spinner.stop();
	}
}

function centerDiv(divId, elW, elH) {
	var target = document.getElementById(divId);
	if (target) {
		target.style.position = "absolute";
		target.style.top = Math.max(0, ($(window).height() - elH) / 2 + 
                						$(window).scrollTop()) + "px";
		target.style.left = Math.max(0, ($(window).width()- elW) / 2 + 
        						$(window).scrollLeft()) + "px";
	}
}