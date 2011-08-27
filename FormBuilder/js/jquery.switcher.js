// JavaScript Document

jQuery.fn.styleSwitcher = function(){
	myLink=$(this);
	// Append new div to body:
	$('body').append('<div id="overlay" />');
	// Give body a height of 100% (to fix IE6 issue):
	$('body').css({height:'100%'});
	// Select newly created div and apply some styles:
	$('#overlay')
		.css({
			display: 'none',
			position: 'absolute',
			top:0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 1000,
			background: 'black url(img/ajax-loader.gif) no-repeat center'
		})
		// Now fade in the div (#overlay):
		.fadeIn(500,function(){
							 
			// The following will happen when the div has finished fading in:		
				// add link element in HEAD of document
				var myStyle=myLink.attr("class");
			
				if(myStyle=="light"){	
					$('#dark').remove();
				}else if(myStyle=="dark"){
					
				}else{
					$('.altStyle').not('#dark').remove();
				}
				
				$('#defaultStyle').after('<link rel="stylesheet" class="altStyle" id="'+myStyle+'" href="css/' + myStyle + '.css" type="text/css" media="screen" />');
				
					// When StyleSheet has loaded, fade out and remove the #overlay div:
				setTimeout ( function(){
					$('#overlay').fadeOut(500,function(){
						$(this).remove();
					});				  
				}, 500 );		
		});
		return this;
}

