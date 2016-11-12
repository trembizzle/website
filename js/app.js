// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
	
	// Handle the AJAX load of the xml
	$.get("blogger.xml", function(data){

			//if XML loaded successfully find all blog entries
			html = "";
			
			//get text for title and the content 
			title = $(data).find("entry:first").find("title").text();
			content = $(data).find("entry:first").find("content").text();

			//create your own html
			html += "<h3>" + title + "</h3>";
			html += '<p>' + content + '</p>';
			html += "";
			
			//append html to the container of yor choice
			$(".blog").html(html);
		}).error(function() {
			// Just do nothing
	});
	
	// Handle the scrolling to a section
	$(".scroll").click(function(event) {
        // Get the full url - like mysitecom/index.htm#home
        var full_url = $(this).attr('href');

        // Split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];
		
		$('html, body').animate({
                        scrollTop: $('#'+trgt).offset().top - 100
                    }, 1000);
    }).error(function() {
		// Just do nothing
	});
	
	// Trackexternal links as events
	$(".external-link").click(function(event) {
        ga('send', 'event', 'external-link', 'click', $(this).attr('title'), $(this).attr('href'));
    }).error(function() {
		// Just do nothing
	});
	
	// Track tab clicks as events
	$(".tab-link").click(function(event) {
		ga('send', 'event', 'tab', 'click', 'Skills', $(this).attr('href'));
	}).error(function() {
		// Just do nothing
	});
});