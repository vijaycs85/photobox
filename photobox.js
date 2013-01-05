(function ($) {

  Drupal.behaviors.photobox = {};
  Drupal.behaviors.photobox.attach = function(context, settings) {
    $('a.photobox', context).photobox();
  };

})(jQuery);
