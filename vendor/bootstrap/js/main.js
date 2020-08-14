(function() { 
        $(window).resize(function(){
          if ( $(this).width() < 768) {     
            $('.body').css({'overflow-x' : 'hidden'});
          }
          else{
            $('body').css({'position' : 'relative',});
          }
        }
    );
})();