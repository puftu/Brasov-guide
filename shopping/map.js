$(function() {
  window.googleMarkerData = [];
  initMarkerData();
  initShoppingTemplate();
  $(".markerLink").on("click", highlightMarker);
});

function initMarkerData() {
  window.markerData = [{
      name: "Coresi Shopping Resort",
      picture: "coresi.jpg",
      index: 0,
      id: "coresi",
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
      index: 1,
      id: "eliana",
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
      index: 2,
      id: "unirea",
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
      index: 3,
      id: "star",
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
    center: markerData[1].coordonates,
    zoom: 12
  });
  for (var i = 0; i < markerData.length; i++) {
    var marker = new google.maps.Marker({
      position: markerData[i].coordonates,
      map: map,
      title: markerData[i].name + "\n" + markerData[i].address + "\n" + markerData[i].phone
    });
    googleMarkerData.push(marker);

    attachSecretMessage(marker, markerData[i].address);
  }
}

function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}

function highlightMarker(event) {
  var index = $(this).data("markerIndex");
  console.log(index);
  clearMarkerAnimation();
  if (googleMarkerData[index].getAnimation() != google.maps.Animation.BOUNCE) {
    googleMarkerData[index].setAnimation(google.maps.Animation.BOUNCE);
  } else {
    googleMarkerData[index].setAnimation(null);
  }
  map.setCenter(markerData[index].coordonates);
};

function clearMarkerAnimation() {
  for (var i = 0; i < googleMarkerData.length; i++) {
    googleMarkerData[i].setAnimation(null);
  }
}

function initShoppingTemplate() {
  var rendered = Mustache.render($('#shoppingTemplate').html(), {
    "shopping": markerData
  });
  $('.shoppingContainer').html(rendered);
}