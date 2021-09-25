/*!
 * RoducksJS
 * (c) 2021
 */
(function ($) {
  const version = '2.0';

  let $extend = {};

  const $version = (function(){
    return version;
  });

  const $settings = (function() {
    let data = {};
    let locked = false;

    return {
      init: function (_data) {
        if (!locked) {
          data = _data;
          locked = true;
        }
      },
      get: function (key, value) {
        return data[key] ?? value;
      },
      set: function (key, value) {
        data[key] = value;
      },
      delete: function (key) {
        if (key != '_data') {
          delete data[key];
        }
      },
      data: function () {
        return data;
      }
    };
  })();

  const $data = (function() {
    return $settings.get('_data');
  });

  const $fn = (function(query) {

    return $extend;
  });

  const $init = (function() {

  });

  const $roducks = $fn || {};
  $roducks.settings = $settings;
  $roducks.getVersion = $version;
  $roducks.data = $data;
  $roducks.init = $init;

  window.$roducks = $roducks;
})(jQuery);