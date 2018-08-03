$(function() {
  window.googleMarkerData = [];
  initMarkerData();
  initHotelsTemplate();
  $(".markerLink").on("click", highlightMarker);
});

function initMarkerData() {
  window.markerData = [{
      name: "Kronwell",
      picture: "Kronwell.jpg",
      index: 0,
      id: "Kronwell",
      rating: 4.7,
      address: "Bulevardul Gării 7A, Brașov",
      website: "http://www.kronwell.com//",
      nameWebSite: "kronwell.com",
      phone: "0368 730 800",
      coordonates: {
        lat: 45.660292,
        lng: 25.614774
      }
    },
    {
      name: "Victoria Bulevard",
      picture: "Victoria Bulevard.jpg",
      index: 1,
      id: "Victoria Bulevard",
      rating: 4.6,
      address: "Bulevardul Victoriei 6A, Brașov",
      website: "http://www.victoriabulevardhotel.ro/",
      nameWebSite: "victoriabulevardhotel.ro",
      phone: "0368 800 500",
      coordonates: {
        lat: 45.6559493,
        lng: 25.6121266
      }
    },
    {
      name: "Belfort Hotel",
      picture: "Belfort.jpg",
      index: 2,
      id: "Belfort",
      rating: 4.6,
      address: "Strada Constantin Dobrogeanu-Gherea 4, Brașov",
      website: "https://www.belfort.ro/",
      nameWebSite: "belfort.ro",
      phone: "0368 005 181",
      coordonates: {
        lat: 45.6429131,
        lng: 25.5990773
      }
    },
    {
      name: "Armatti",
      picture: "Armatti.jpg",
      index: 3,
      id: "Armatti",
      rating: 4.2,
      address: "Strada Lungă 5, Brașov",
      website: "https://www.armatti.ro",
      nameWebSite: "armatti.ro",
      phone: "0368 443 200",
      coordonates: {
        lat: 45.6473997,
        lng: 25.5889502
      }
    },
    {
      name: "Aro Palace",
      picture: "Aro Palace.jpg",
      index: 4,
      id: "Aro Palace",
      rating: 4.7,
      address: "Bulevardul Eroilor 27, Brașov",
      website: "https://aro-palace.ro/",
      nameWebSite: "aro-palace.ro",
      phone: "0268 478 800",
      coordonates: {
        lat: 45.6451976,
        lng: 25.5908999
      }
    },
    {
      name: "Golden Time",
      picture: "Golden Time.jpg",
      index: 5,
      id: "Golden Time",
      rating: 4.4,
      address: "Calea București 99, Brașov",
      website: "http://www.goldentimehotel.ro/",
      nameWebSite: "goldentimehotel.ro",
      phone: "0268 311 115",
      coordonates: {
        lat: 45.6389755,
        lng: 25.6296171
      }
    },
    {
      name: "Ramada",
      picture: "Ramada.jpg",
      index: 6,
      id: "Ramada",
      rating: 4.3,
      address: "Calea București 13, Săcele",
      website: "http://www.ramadabrasov.ro/",
      nameWebSite: "ramadabrasov.ro",
      phone: "0268 508 009",
      coordonates: {
        lat: 45.609864,
        lng: 25.6590409
      }
    },
    {
      name: "Belvedere",
      picture: "Belvedere.jpg",
      index: 7,
      id: "Belvedere",
      rating: 4.5,
      address: "Strada Stejerișului 11, Brașov",
      website: "http://www.hotelbelvederebv.ro/",
      nameWebSite: "hotelbelvederebv.ro",
      phone: "0268 415 575",
      coordonates: {
        lat: 45.6449745,
        lng: 25.5785912
      }
    },
    {
      name: "Hotel Gott",
      picture: "Hotel Gott.jpg",
      index: 8,
      id: "Hotel Gott",
      rating: 4.5,
      address: "Strada Johann Gött 2, Brașov",
      website: "http://www.hotelgott.ro/",
      nameWebSite: "hotelgott.ro",
      phone: "0268 472 210",
      coordonates: {
        lat: 45.6410248,
        lng: 25.5898504
      }
    },
    {
      name: "Coroana Brasovului",
      picture: "Coroana Brasovului.jpg",
      index: 9,
      id: "Coroana Brasovului",
      rating: 4.4,
      address: "Strada Doctor Vasile Saftu 1, Brașov",
      website: "https://coroana-brasovului.ro/",
      nameWebSite: "coroana-brasovului.ro",
      phone: "0268 513 866",
      coordonates: {
        lat: 45.635245,
        lng: 25.579884
      }
    }
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

function initHotelsTemplate() {
  var rendered = Mustache.render($('#hotelsTemplate').html(), {
    "hotels": markerData
  });
  $('.hotelsContainer').html(rendered);
}