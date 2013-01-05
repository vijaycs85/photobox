(function ($) {

  Drupal.behaviors.photobox = {};
  Drupal.behaviors.photobox.attach = function(context, settings) {
    /*  $(document).ready() wrapper required to properly initialize Photobox. */
    $(document).ready(function(){
      $('a.photobox', context).photobox();
    });
  };

})(jQuery);
