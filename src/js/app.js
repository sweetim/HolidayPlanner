'use strict';

var holidayPlan = [
    {
        origin: {
            location: {
                lat : 42.792590,
                lng: 141.670468
            },
            name: 'Sapporo Airpot',
            type: 'airport',
            link: 'http://www.new-chitose-airport.jp/en/',
            time: '8.00 am',
            date: '16 Oct 2015'
        },
        waypoints: [
            {
                location: {
                    lat : 43.048293,
                    lng : 141.496985,
                },
                name: 'Historic Vilalge of Hokkaido',
                link: 'http://www.japan-guide.com/e/e5303.html',
                type: 'poi',
                images: [
                    'http://www.japan-guide.com/g3/5303_11.jpg',
                    'http://www.japanesesearch.com/wp-content/uploads/2014/01/historical_village_of_hokkaido_sapporo.jpg',
                    'http://www.jaist.ac.jp/~bjorner/diary/4-diary/DSC00588.JPG'
                ]
            }
        ],
        destination: {
            location: {
                lat : 42.994680,
                lng : 141.334379,
            },
            name: 'APA Hotel & Resort Sapporo',
            type: 'hotel',
            link: 'http://www.apahotel.com/hotel/hokkaido/04_resort-sapporo/',
            time: '8.00 pm',
            date: '16 Oct 2015',
            hotel: {
                price: 29300,
                currency: 'yen'
            }
        }
    }
];



var map = new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: -34.397,
        lng: 150.644
    },
    zoom: 8
});
