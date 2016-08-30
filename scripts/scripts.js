$(document).ready(function($) {

  // accordian section

  $('.js-accordion-toggle').click(function(){

    // $('.js-accordion-toggle').removeClass('li--active');
    // $(this).addClass('li--active'),
    // $(this).next().addClass('li--active');

    //Expand or collapse this panel
    $(this).next().addClass('animated fadeIn').slideToggle('slow');

    //Hide the other panels
    //$(".js-accordion-content").not($(this).next()).slideUp('fast');

  });

  $('.js-close').on('click', function(){
    $(".js-accordion-content").slideUp('fast');
  });

  var $window_height = parseInt( $(document).height() );

  // on scroll, update top nav
  $(window).on("scroll resize", function(){

      // get update box
      var $h2_position = $('#js-update-with-title').offset();
      
      var title_distance_from_top = parseInt( $('#js-update-with-title').offset().top )

      var percent_through_story = Math.round( (title_distance_from_top / $window_height) * 100 );
         // console.log(title_distance_from_top) .
      // console.log(percent_through_story);
      
      $('.progress--inner-wrap').css( 'width', '' + percent_through_story + '%' );

      // loop over all headers
      $('.js-section-title').each(function(){
          // console.log($h2_position)
          // check if header is at the top
          // && $h2_position.top <= $(this).next().offset().top
          if ( $h2_position.top >= $(this).offset().top  ) {
              
              $('#js-update-with-title').html( $(this).text() );
              
              return; //break the loop
          }

      });

  });

  // init the value
  $(window).trigger('scroll'); 

}); // end doc ready

