$( document ).ready(function() {
	$(function(){
	    $("#claim-text").typed({
	    	strings: ["Tasty tech events in ^300 Trento."],
	        typeSpeed: 0
	    });
	});
	$("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
	$('#nav-button').click(function(){
		$(this).toggleClass('open');
		$('.navigation-panel').toggleClass('visible');
	});
});
