$(function() {
  var opts = {
    method: 'flickr.photos.search',
    api_key: 'dfe6d3510a114d52b394b0116a7cf9bb',
    sort: 'relevance',
    text: 'Brasov',
    extras: 'url_m, url_q',
    page: 5,
    per_page: 30,
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
          height: '300px',
          width: '300px',
        })).appendTo(images);
      });
      images.appendTo('#galleryContainer');
      $("#lightgallery").lightGallery();
    } else {
      console.log('not ok', resp);
    }
  });
});

//pagination
var current_page = 1;
var records_per_page = 3;

var objJson = opts;

// [{
//     adName: "AdName 1"
//   },
//   {
//     adName: "AdName 2"
//   },
//   {
//
//   }
// ]; // Can be obtained from another source, such as your objJson variable

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}

function changePage(page) {
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var listing_table = document.getElementById("listingTable");
  var page_span = document.getElementById("page");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = "";

  for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
    listing_table.innerHTML += objJson[i].adName + "<br>";
  }
  page_span.innerHTML = page + "/" + numPages();

  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
  }
}

function numPages() {
  return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
  changePage(1);
};