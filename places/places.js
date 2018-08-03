function initPage() {
  window.googleMarkerData = [];
  initShoppingTemplate();
  $(".markerLink").on("click", highlightMarker);
}



function initMap() {
  window.map = new google.maps.Map(document.querySelector('#map'), {
    center: markerData[1].coordonates,
    zoom: 13
  });
  for (var i = 0; i < markerData.length; i++) {
    var marker = new google.maps.Marker({
      position: markerData[i].coordonates,
      map: map,
      title: markerData[i].name + "\n" + markerData[i].address + "\n" + markerData[i].phone
    });
    googleMarkerData.push(marker);

    attachSecretMessage(marker, markerData[i].name + "\n" + markerData[i].address);
  }
}

function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);

    setTimeout(function() {
      infowindow.close();
    }, 3000);
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
  var rendered = Mustache.render($('#placesTemplate').html(), {
    "places": markerData
  });
  $('.placesContainer').html(rendered);
}