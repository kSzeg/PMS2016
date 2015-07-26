var bills = [
	    {
	    	"date": "2016",
	    	"name": "Name",
	    	"information": "waw",
	    	"result": "passed"
	    },
	    {
	    	"date": "2017",
	    	"name": "Name2",
	    	"information": "waw",
	    	"result": "passed"
	    }
	];


$(function() {

	console.log(bills)

	for (var key in bills) {
		$(".timeline").append(
			$("<div/>", {
	            class: "entry"
	        }).append(
	        	$("<h1/>", {
	        		html: bills[key].date
	        	})
	        ).append(
	        	$("<h2/>", {
	        		html: bills[key].name
	        	})
	        ).append("Information About The Bill").append(
	        	$("<div/>", {
	        		html: bills[key].result
	        	})
	        )
	    );	
	}
	

});