$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 8,
  	loop:true,
  	nav: true,
	});
   $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('8000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('8000');
            $('.filter').filter('.'+value).show('8000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
});

  $('.carousel').carousel({
            interval:4000,
    })

 