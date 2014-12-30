/*global Drupal: false, jQuery: false */
/*jslint devel: true, browser: true, maxerr: 50, indent: 2 */
(function ($) {
  "use strict";

  Drupal.behaviors.photobox = {};
  Drupal.behaviors.photobox.attach = function(context, settings) {
    var gallery_rels = [];
    $('a.photobox', context).each(function(index, element) {
      var rel = $(this).attr('rel');
      if ($.inArray(rel, gallery_rels) == -1) {
        gallery_rels.push(rel);
      }
    });
    gallery_rels.forEach(function(rel, i, arr) {
      $('a.photobox[rel="' + rel + '"]', context).parent().photobox('a.photobox[rel="' + rel + '"]');
    });
  };

})(jQuery);
