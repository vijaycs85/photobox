/*global Drupal: false, jQuery: false */
/*jslint devel: true, browser: true, maxerr: 50, indent: 2 */
(function ($) {
  "use strict";

  Drupal.behaviors.photobox = {};
  Drupal.behaviors.photobox.attach = function(context, settings) {
    var galleries = [];
    $('a.photobox', context).each(function(index, element) {
      var gallery = $(this).data('photoboxGallery');
      if ($.inArray(gallery, galleries) == -1) {
        galleries.push(gallery);
      }
    });
    galleries.forEach(function(gallery, i, arr) {
      $('a.photobox[data-photobox-gallery="' + gallery + '"]', context).parent().photobox('a.photobox[data-photobox-gallery="' + gallery + '"]');
    });
  };

})(jQuery);
