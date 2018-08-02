$(function() {
  var opts = {
    method: 'flickr.photos.search',
    api_key: 'dfe6d3510a114d52b394b0116a7cf9bb',
    sort: 'relevance',
    text: 'Brasov',
    extras: 'url_m, url_q',
    per_page: 100,
    format: 'json',
    nojsoncallback: 1
  };
  $.get('http://api.flickr.com/services/rest/', opts, function(resp) {
    var images = $("<div id='lightgallery'>");
    if (resp.stat === "ok") {

      $.each(resp.photos.photo, function(index, value) {
        var image = $('<a>', {
          href: value.url_m
        }).append($('<img>', {

          src: value.url_q,
          title: value.title,
          height: '100px',
        })).appendTo(images);
      });
      images.appendTo('#galleryContainer');
      $("#lightgallery").lightGallery();
    } else {
      console.log('not ok', resp);
    }
  });
});