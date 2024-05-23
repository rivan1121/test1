document.addEventListener('DOMContentLoaded', function() {
    initMap();
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -7.3500, lng: 108.2172},
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: {lat: -7.3500, lng: 108.2172},
        map: map,
        title: 'Kelurahan Tanjung, Tasikmalaya'
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
