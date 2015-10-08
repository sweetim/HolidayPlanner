'use strict';

angular.module('travel.HolidayPlanService', [])
    .factory('HolidayPlanService', function($q) {
        var day1 = {
            origin: {
                location: {
                    lat : 42.792590,
                    lng: 141.670468
                },
                name: 'Sapporo Airport',
                description: 'meet in airport and pick up rental car',
                type: 'airport',
                link: 'http://www.new-chitose-airport.jp/en/',
                time: '10.00 am',
                date: '16 Oct 2015'
            },
            waypoints: [
                {
                    location: {
                        lat : 43.048167,
                        lng : 141.496867,
                    },
                    name: 'Historic Vilalge of Hokkaido',
                    link: 'http://www.japan-guide.com/e/e5303.html',
                    description: 'The Historic Village of Hokkaido (開拓の村, Kaitaku no Mura) is an open air museum in the suburbs of Sapporo. It exhibits about 60 typical buildings from all over Hokkaido, dating from the Meiji and Taisho Periods (1868 to 1926), the era when Hokkaido development was carried out on a large scale. There are four different sections: a town, fishing village, farm village and a mountain village.',
                    time: '11.00 pm',
                    date: '16 Oct 2015',
                    duration: '1.5 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/5303_11.jpg',
                        'http://www.japanesesearch.com/wp-content/uploads/2014/01/historical_village_of_hokkaido_sapporo.jpg',
                        'http://www.jaist.ac.jp/~bjorner/diary/4-diary/DSC00588.JPG'
                    ]
                },
                {
                    location: {
                        lat : 43.088668,
                        lng : 141.271685
                    },
                    name: 'Shiroi Koibito Park',
                    link: 'http://www.japan-guide.com/e/e5307.html',
                    description: 'Shiroi Koibito Park is a theme park by Ishiya, a local chocolate company. The company flagship product is the Shiroi Koibito cookie, which consists of two thin butter cookies and a layer of white chocolate in between. It is one of the most famous souvenirs from Hokkaido.',
                    time: '2.00 pm',
                    date: '16 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/5307_01b.jpg',
                        'http://www.japan-guide.com/g3/5307_11.jpg'
                    ]
                },
                {
                    location: {
                        lat : 43.071644,
                        lng : 141.368856,
                    },
                    name: 'Sapporo Beer Garden',
                    link: 'http://www.japan-guide.com/e/e5300.html',
                    description: 'Hokkaido is the birthplace of beer in Japan. Sapporo Beer, one of the oldest and most popular beer brands in the country, has been brewed in Sapporo since 1877 and is now produced and sold around the world. The Sapporo Breweries opened the Sapporo Beer Museum in 1987 in a former brewery from the Meiji Period. The museum introduces the history of beer in Japan and the process of beer making, but has few explanations in English. After the exhibitions, beer tastings are available at a small fee.',
                    time: '3.00 pm',
                    date: '16 Oct 2015',
                    duration: '2 hour',
                    type: 'poi',
                    images: [
                        'http://www.sapporo-bier-garten.jp/foreign/images/sapporo-beer01.jpg',
                        'http://japan.tourismsee.com/G0/Sapporo-Beer-Museum-G07.jpg',
                        'http://www.visualphotos.com/photo/1x5775721/kessel-hall-sapporo-beer-garden-sapporo-hokkaido-japan.jpg',
                        'http://www.japan-guide.com/g3/5300_01.jpg'
                    ]
                }
            ],
            destination: {
                location: {
                    lat : 42.994680,
                    lng : 141.334379,
                },
                name: 'APA Hotel & Resort Sapporo',
                description: 'stay in this hotel for 2 nights',
                type: 'hotel',
                link: 'http://www.apahotel.com/hotel/hokkaido/04_resort-sapporo/',
                time: '8.00 pm',
                date: '16 Oct 2015',
                hotel: {
                    price: 29300,
                    currency: 'yen'
                }
            }
        };

        var day2 = {
            origin: {
                location: {
                    lat : 42.994680,
                    lng : 141.334379,
                },
                name: 'APA Hotel & Resort Sapporo',
                description: 'stay in this hotel for 2 nights',
                type: 'hotel',
                link: 'http://www.apahotel.com/hotel/hokkaido/04_resort-sapporo/',
                time: '8.00 am',
                date: '17 Oct 2015',
                hotel: {
                    price: 29300,
                    currency: 'yen'
                }
            },
            waypoints: [
                {
                    location: {
                        lat : 43.198707, 
                        lng : 140.989651
                    },
                    name: 'Otaru',
                    link: 'http://www.japan-guide.com/e/e6700.html',
                    description: 'Otaru (小樽) is a small harbor city, about half an hour northwest of Sapporo by train. Its beautifully preserved canal area and interesting herring mansions make Otaru a pleasant day trip from Sapporo or a nice stop en route to or from Niseko or the Shakotan Peninsula.',
                    time: '10.00 pm',
                    date: '17 Oct 2015',
                    duration: '3 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/6706_01.jpg',
                        'http://www.japan-guide.com/g10/destination_otaru_top.jpg',
                    ]
                },                
                {
                    location: {
                        lat : 43.199702, 
                        lng : 141.000459
                    },
                    name: 'Sakaimachi Street',
                    link: 'http://www.japan-guide.com/e/e5307.html',
                    description: 'Sakaimachi Street (境町通り, Sakaimachi Dōri) is an attractive, preserved merchant street in central Otaru, a short walk from the citys canal area. During the development of Hokkaido in the late 1800s and early 1900s, Otaru thrived as a port city, and many trading and shipping companies constructed impressive Western style buildings in the city center to house their offices and shops.',
                    time: '2.00 pm',
                    date: '17 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/6704_02.jpg',
                        'http://www.japan-guide.com/g3/6704_04.jpg',
                        'http://www.japan-guide.com/g3/6704_01.jpg'
                    ]
                },
                {
                    location: {
                        lat : 43.187337, 
                        lng : 140.791811,
                    },
                    name: 'Nikka Whisky Yoichi Distillery',
                    link: 'http://www.japan-guide.com/e/e6707.html',
                    description: 'Nikka Whisky, one of Japans top whisky makers, has its main distillery in Yoichi, the neighboring town of Otaru. The company was founded by Taketsuru Masataka, known as the father of Japanese whisky, who studied whisky making techniques for several years in Scotland before bringing the trade to Japan. He was instrumental in establishing the countrys first whisky distillery, the Yamazaki Distillery near Kyoto, before he set out on his own to start Nikka Whisky here in Hokkaido.',
                    time: '3.00 pm',
                    date: '17 Oct 2015',
                    duration: '2 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g8/6707_02.jpg',
                        'http://www.japan-guide.com/g8/6707_03.jpg',
                        'http://www.japan-guide.com/g8/6707_01.jpg'
                    ]
                },
                {
                    location: {
                        lat : 43.237783, 
                        lng : 141.015708,
                    },
                    name: 'Herring Mansions (Nishin Goten)',
                    link: 'http://www.japan-guide.com/e/e6703.html',
                    description: 'The herring fishing industry played a major role in the history of Otaru since the early days of the towns development, with the vast majority of fish being processed into fertilizer rather than consumed by humans. Large fortunes were made by the leading fishing enterprises until the 1950s, when the herring stocks dramatically declined and the industry collapsed.',
                    time: '3.00 pm',
                    date: '17 Oct 2015',
                    duration: '2 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/6703_11.jpg',
                        'http://www.japan-guide.com/g3/6703_02.jpg'
                    ]
                },
                {
                    location: {
                        lat : 43.191273, 
                        lng : 140.992812
                    },
                    name: 'Otaru Canal',
                    link: 'http://www.japan-guide.com/e/e5307.html',
                    description: 'Otaru Canal (小樽運河, Otaru Unga) was a central part of the citys busy port in the first half of the 20th century. Large vessels were unloaded by smaller ships, which then transported the goods to warehouses along the canal',
                    time: '2.00 pm',
                    date: '17 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/6700_11.jpg',
                    ]
                }
            ],
            destination: {
                location: {
                    lat : 42.994680,
                    lng : 141.334379,
                },
                name: 'APA Hotel & Resort Sapporo',
                description: 'stay in this hotel for 2 nights',
                type: 'hotel',
                link: 'http://www.apahotel.com/hotel/hokkaido/04_resort-sapporo/',
                time: '8.00 pm',
                date: '17 Oct 2015',
                hotel: {
                    price: 29300,
                    currency: 'yen'
                }
            }
        };

        function generatePath(data) {
            var result = [];
            var next;

            var current = data.origin;
            var path = data.waypoints.slice();
            path.push(data.destination);
            
            while (next = path.shift()) {
              result.push({
                origin: current.location,
                destination: next.location,
                travelMode: google.maps.TravelMode.DRIVING
              });
              current = next;
            }

            return result;
        }

        function getGoogleMapPath(src) {
            var promises = [];

            var directionsService = new google.maps.DirectionsService();

            src.forEach(function(path) {
                var defer = $q.defer();

                directionsService.route(path, function(response, status) {
                    if (status === google.maps.DirectionsStatus.OK) {
                        defer.resolve(response);

                        return;
                    } 

                    defer.reject(status);
                });

                promises.push(defer.promise);
            });

            return $q.all(promises);
        }

        var all = [];
        all.push(day1);
        all.push(day2);

        return {
            getDayPlan: function(day) {
                return all[day];
            },
            getAllPlan: function() {
                return all;
            },
            getMapPath: function(day) {
                var data = all[day];
                var pathData = generatePath(data);

                return getGoogleMapPath(pathData);
            },
            getPathInfo: function(day) {
                var defer = $q.defer();

                var data = all[day];
                var pathData = generatePath(data);

                getGoogleMapPath(pathData).then(function(path) {
                    var pathInfo = [];

                    path.forEach(function(item) {
                        var info = item.routes[0].legs.reduce(function(a, b) {
                            return {
                                duration: a.duration + b.duration.value,
                                distance: a.distance + b.distance.value
                            };
                        }, {
                            duration: 0,
                            distance: 0
                        });

                        pathInfo.push({
                            duration: info.duration / 60,
                            distance: info.distance / 1000
                        });
                    });

                    defer.resolve(pathInfo);
                });

                return defer.promise;
            }
        };
    });
