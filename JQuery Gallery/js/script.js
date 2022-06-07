var Image_Gallery_Namespaces = { 


	GenerateGallery: function () { 


		$(document).ready(function() { 

			var arrayImageSources = [];
			var starterLoop;
			var elementSource;
			var numberOfImage;
			var sourceImage;
			var counterImage;
			var previousImage;
			var nextImage;
			var indexOfLastImage;

			for (starterLoop = 0; starterLoop < $("img").length; starterLoop++) { 

				elementSource = $("img")[starterLoop];
				arrayImageSources[starterLoop] = $(elementSource).attr('src');
			} 

			numberOfImage = arrayImageSources.length;
		    $(".hidden_div").hide();

		    $('img').on('click', function () { 

		    	sourceImage = $(this).attr('src');
		    	startPosition = arrayImageSources.indexOf(sourceImage);
		    	counterImage = (startPosition + 1) + " / " + numberOfImage;

				$(".hidden_div").empty().show();
		    	$(".hidden_div").prepend('<p id = "para">' + counterImage + '</p>');
		        $(".hidden_div").prepend('<img id = "gallery_image" src="' + sourceImage + '" />');
		        $(".hidden_div").prepend('<input type="button" id = "button1" value="close"/>');
		        $(".hidden_div").prepend('<input type="button" id = "button2" value="expand"/>');

		        $("#faded_div").css("pointerEvents", "none").width('100%');
	        	$("#faded_div").addClass("unselection");
	        	$("#button2").addClass("unselection");

		        $('#faded_div:not(.hidden_div)').fadeTo(500, 0.5);
		        $('#faded_div:not(.hidden_div)').css("background-color", "grey");

		        $(".hidden_div").prepend('<img id = "arrow_image" src="image/arrow.png" />').prepend('<img id = "arrow_image2" src="image/arrow2.png" />');
		        $("#arrow_image").hide();
		        $("#arrow_image2").hide();

			   	$("#button1").click(function() { 

			   		$(".hidden_div").hide();
			   		$('#faded_div').fadeTo(500, 1).css("pointerEvents", "auto");
			   		$("#button2").val("expand");
			   		$(".hidden_div").removeClass("expand_div");
			   		$("#img_container").width('90%').height('50%');
			   		$('#faded_div:not(.hidden_div)').css("background-color", "rgba(234, 242, 255, 0.8)");

			   	}); 

			   	$("#button2").click(function() { 

					$("#faded_div").css("pointerEvents", "none");
			   		$(".hidden_div").toggleClass("expand_div");
			   		$("#faded_div").addClass("unselection").css("pointerEvents", "none");

			   		if ($("#button2").val() == "expand") { 
						$("#button2").val("Return");
					} 
					else if ($("#button2").val() == "Return") { 
						$("#button2").val("expand");
					} 

			   	}); 


			    $(".hidden_div").mouseenter(function() { 
				    $("#arrow_image").show();
			        $("#arrow_image2").show();
			    }); 

			    $(".hidden_div").mouseleave(function(){
				    $("#arrow_image").hide();
			        $("#arrow_image2").hide();
			    });  
		        

			    $("#arrow_image").click(function(){ 

			    	indexOfLastImage = numberOfImage - 1;
			    	
			    	if (startPosition == 0) { 
			    		previousImage = indexOfLastImage;
			    		startPosition = indexOfLastImage;
			    	} 
			    	else { 
			    		startPosition--;
			    		previousImage = startPosition;
			    	} 

				    $("#gallery_image").attr("src", arrayImageSources[previousImage]);
				    counterImage = (previousImage + 1) + " / " + numberOfImage;
				    $("#para").text(counterImage);

			    });  


			    $("#arrow_image2").click(function() { 

			    	indexOfLastImage = numberOfImage - 1;
			    	var gallery = document.getElementById("img_container");
			    	var maxCount = gallery.getElementsByTagName("img").length;

			    	if (startPosition == maxCount - 1) { 
			    		nextImage = 0;
			    		startPosition = 0;
			    	} 
			    	else { 
			    		startPosition++;
			    		nextImage = startPosition;
			    	} 


			    $("#gallery_image").attr("src", arrayImageSources[nextImage]);

			    counterImage = (nextImage + 1) + " / " + numberOfImage;
			    $("#para").text(counterImage) ;

			    }); 

		        
		    });

		});


	} 


} 
