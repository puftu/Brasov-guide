$(function() {
  initMarkers();
  initShoppingTemplate();
  $("#coresi").on("click", addMarker);
  // $("#eliana").on("click", addMarker);
});

function initMarkers() {
  window.markers = [{
      name: "Coresi Shopping Resort",
      picture: "coresi.jpg",
      rating: 4.6,
      address: "Strada Zaharia Stancu 1, Brașov",
      website: "https://www.coresibrasov.ro/",
      nameWebSite: "coresibrasov.ro",
      phone: "0736 738 787",
      coordonates: {
        lat: 45.672618,
        lng: 25.615557
      }
    },
    {
      name: "Eliana Mall",
      picture: "eliana.jpg",
      rating: 4.1,
      address: "Strada Bazaltului 2, Brașov",
      website: "https://eliana-mall.ro/",
      nameWebSite: "eliana-mall.ro",
      phone: "0268 549 073",
      coordonates: {
        lat: 45.656823,
        lng: 25.561943
      }
    },
    {
      name: "Unirea Shopping Center",
      picture: "unirea.jpg",
      rating: 3.6,
      address: "Bulevardul Gării 3A, Brașov",
      website: "http://www.unireashop.ro/",
      nameWebSite: "unireashop.ro",
      phone: "0268 301 030",
      coordonates: {
        lat: 45.661133,
        lng: 25.608403
      }
    },
    {
      name: "Star Shopping Center",
      picture: "star.jpg",
      rating: 4.7,
      address: "Strada Nicolae Bălcescu 62, Brașov",
      website: "http://www.starcom.ro/",
      nameWebSite: "starcom.ro",
      phone: "0268 419 323",
      coordonates: {
        lat: 45.643681,
        lng: 25.597442
      }
    },
  ]
}

function initMap() {

  window.map = new google.maps.Map(document.querySelector('#map'), {
    center: markers[0].coordonates,
    zoom: 17
  });

}

function addMarker(event) {
  var shoppingId = $(this).data("shoppingId");
  console.log(shoppingId);
  var marker = new google.maps.Marker({
    position: markers[shoppingId].coordonates,
    map: map
  });

}

function initShoppingTemplate() {
  var rendered = Mustache.render($('#shoppingTemplate').html(), {
    "shopping": markers
  });
  $('.shoppingContainer').html(rendered);
}