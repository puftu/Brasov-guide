$(function() {
  $("#listingTable").on("click", "span", paginationClickHandler);
  loadGallery(1);

  function paginationClickHandler(e) {
    var pageNumber = e.currentTarget.innerHTML;
    loadGallery(pageNumber);

    var header = document.getElementById("listingTable");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  function loadGallery(pageNumber) {
    var opts = {
      method: 'flickr.photos.search',
      api_key: 'dfe6d3510a114d52b394b0116a7cf9bb',
      sort: 'relevance',
      text: 'Brasov',
      extras: 'url_m, url_q',
      per_page: 32,
      page: pageNumber,
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
        $('#galleryContainer').html(images);
        $("#lightgallery").lightGallery();
      } else {
        console.log('not ok', resp);
      }
    });
  }
});



//   // Validate page
//   if (page < 1) page = 1;
//   if (page > numPages()) page = numPages();
//
//   listing_table.innerHTML = "";
//
//   for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
//     listing_table.innerHTML += objJson[i].adName + "<br>";
//   }
//   page_span.innerHTML = page + "/" + numPages();
//
//   if (page == 1) {
//     btn_prev.style.visibility = "hidden";
//   } else {
//     btn_prev.style.visibility = "visible";
//   }
//
//   if (page == numPages()) {
//     btn_next.style.visibility = "hidden";
//   } else {
//     btn_next.style.visibility = "visible";
//   }
// }
//
// function numPages() {
//   return Math.ceil(objJson.length / records_per_page);
// }
//
// window.onload = function() {
//   changePage(1);
// };