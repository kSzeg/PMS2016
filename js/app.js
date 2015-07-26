var bills = [
	    {

	    	"date": "2016",
	    	"name": "Fast-track pipelines",
	    	"information": "Pipeline fast track   Risks: Potential for oil spill  Likelihood of Spill: 10%",
	    	"result": "passed"
	    },
	    {
	    	"date": "2017",
	    	"name": "Put a price on carbon",
	    	"information": "Lift Moratarium on Fish Farms   Risks: drugs/pesticides into wild fish population",
	    	"result": "passed"
	    },
	    {
	    	"date": "2018",
	    	"name": "Expand the oilsands",
	    	"information": "Tar Sands Expansion   Risks: incerease in emissions/climate deaths/",
	    	"result": "passed"
	    },
	    {
	    	"date": "2019",
	    	"name": "Make stronger environmental assessments",
	    	"information": "Easy Environmental assessment: ",
	    	"result": "passed"
	    }
	];

var billIndex = 0;

showBill = function() {

	if (bills[billIndex] != undefined)
	{
		
		$(".modal-title").html(bills[billIndex].date +" "+ bills[billIndex].name);

		$(".modal-body").html(
			$("<div/>", {
	            class: "entry"
	        }).append(
	        	$("<span/>", {
	        		html: bills[billIndex].information
	        	})
	        ).append(
	        	$("<div/>", {
	        		html: bills[billIndex].result
	        	})
	        )
	    );

    	$('#myModal').modal({
			backdrop: 'static'
		}).on('shown.bs.modal', function (e) {
			$("#show-bill").html("Continue passing bills");
		})



	}


}

closeBill = function() {
	billIndex++;
	$('#myModal').modal('hide');
	
	if (bills[billIndex] === undefined)
	{
		$("#show-bill").html(
			$("<a/>", {
				href: "1.html",
				html: "You're done! Show Result"
			})
		);
	}

	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	return false;
	

}

pass = function() {
	$("#cd-timeline").append(
		$("<div/>", {
			class: "cd-timeline-block"	
		}).append(
			$("<div/>", {
				class: "cd-timeline-img cd-picture"
			})
		).append(
			$("<div/>", {
				 class: "cd-timeline-content",
				 html: "<h2>"+ bills[billIndex].name+"</h2><p>"+bills[billIndex].information+"</p><span class='cd-date'>"+bills[billIndex].date+"</span>"
			})
		)
	);
	closeBill();
}

reject = function() {
	$("#cd-timeline").append(
		$("<div/>", {
			class: "cd-timeline-block"	
		}).append(
			$("<div/>", {
				class: "cd-timeline-img cd-movie"
			})
		).append(
			$("<div/>", {
				 class: "cd-timeline-content",
				 html: "<h2>"+ bills[billIndex].name+"</h2><p>"+bills[billIndex].information+"</p><span class='cd-date'>"+bills[billIndex].date+"</span>"
			})
		)
	);
	closeBill();
}

$(function() {

	console.log(bills);

	$(document).on("click", "#show-bill", function(){
		$(".modal-footer").html("");
		$(".modal-footer").append(
			$("<button/>", {
				class: "btn btn-success pass",
				html: "Pass"
			}).on("click", function() {
				pass(billIndex);
			})
		).append(
			$("<button/>", {
				class: "btn btn-danger reject",
				html: "Reject"
			}).on("click", function(){
				reject(billIndex);
			})
		);

		showBill();
	});

	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}	

});