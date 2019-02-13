

(function ($, Drupal, drupalSettings){

    'use strict';

    Drupal.behaviors.example = {
        attach: function (context, settings) {
            document.addEventListener('aos:in', ({ detail }) => {
                console.log('animated in', detail);
              });
        }
    };

})(Jquery, Drupal, drupalSettings);