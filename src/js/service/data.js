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
                        lat : 42.787513, 
                        lng : 141.679071,
                    },
                    name: 'Royce chocolate world',
                    link: 'https://www.royce.com/contents/english_rcw/',
                    description: 'Royce produced this new-concept chocolate shop called Royce Chocolate World. It was opened at New Chitose Airport on the 15th of July, 2011. It is the first chocolate factory and museum located inside of an airport in Japan. The fun and vibrant gift shop offers a wide range of items that you cant get anywhere else! Look for 200 varieties of very original products. Please visit and explore.',
                    time: '10.00 am',
                    date: '16 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'https://www.royce.com/images/pc/english/rcw/rcw_img01.jpg',
                        'https://www.royce.com/images/pc/english/rcw/rcw_img02.jpg'
                    ]
                },
                {
                    location: {
                        lat : 43.048167,
                        lng : 141.496867,
                    },
                    name: 'Historic Vilalge of Hokkaido',
                    link: 'http://www.japan-guide.com/e/e5303.html',
                    description: 'The Historic Village of Hokkaido (開拓の村, Kaitaku no Mura) is an open air museum in the suburbs of Sapporo. It exhibits about 60 typical buildings from all over Hokkaido, dating from the Meiji and Taisho Periods (1868 to 1926), the era when Hokkaido development was carried out on a large scale. There are four different sections: a town, fishing village, farm village and a mountain village.',
                    time: '11.00 am',
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
                        lat : 43.199702, 
                        lng : 141.000459
                    },
                    name: 'Sakaimachi Street',
                    link: 'http://www.japan-guide.com/e/e5307.html',
                    description: 'Sakaimachi Street (境町通り, Sakaimachi Dōri) is an attractive, preserved merchant street in central Otaru, a short walk from the citys canal area. During the development of Hokkaido in the late 1800s and early 1900s, Otaru thrived as a port city, and many trading and shipping companies constructed impressive Western style buildings in the city center to house their offices and shops.',
                    time: '9.30 pm',
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
                        lat : 43.237783, 
                        lng : 141.015708,
                    },
                    name: 'Herring Mansions (Nishin Goten)',
                    link: 'http://www.japan-guide.com/e/e6703.html',
                    description: 'The herring fishing industry played a major role in the history of Otaru since the early days of the towns development, with the vast majority of fish being processed into fertilizer rather than consumed by humans. Large fortunes were made by the leading fishing enterprises until the 1950s, when the herring stocks dramatically declined and the industry collapsed.',
                    time: '11.00 am',
                    date: '17 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/6703_11.jpg',
                        'http://www.japan-guide.com/g3/6703_02.jpg'
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
                    time: '1.00 pm',
                    date: '17 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g8/6707_02.jpg',
                        'http://www.japan-guide.com/g8/6707_03.jpg',
                        'http://www.japan-guide.com/g8/6707_01.jpg'
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
                    time: '3.30 pm',
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
                time: '6.00 pm',
                date: '17 Oct 2015',
                hotel: {
                    price: 29300,
                    currency: 'yen'
                }
            }
        };

        var day3 = {
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
                date: '18 Oct 2015',
                hotel: {
                    price: 29300,
                    currency: 'yen'
                }
            },
            waypoints: [           
                {
                    location: {
                        lat : 42.496654, 
                        lng : 141.145146
                    },
                    name: 'Jigokudani (Hell Valley)',
                    link: 'http://www.japan-guide.com/e/e6751.html',
                    description: 'Jigokudani or "Hell Valley" is a spectacular, appropriately named valley just above the town of Noboribetsu Onsen, which displays hot steam vents, sulfurous streams and other volcanic activity. It is a main source of Noboribetsus hot spring waters.',
                    time: '11.00 am',
                    date: '18 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g2/6750_01.jpg',
                        'http://www.japan-guide.com/g2/6751_01.jpg',
                        'http://www.japan-guide.com/g2/6751_02.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 42.551720, 
                        lng : 140.764744,
                    },
                    name: 'Lake Toya',
                    link: 'http://www.japan-guide.com/e/e6725.html',
                    description: 'Lake Toya (洞爺湖, Tōyako) is part of the Shikotsu-Toya National Park. In addition to the lake itself, the Toyako region features hot springs and an active volcano, Mount Usu, which last erupted in the year 2000. The area also offers many fishing, hiking, and camping opportunities.',
                    time: '2.00 pm',
                    date: '18 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g10/destination_toya_top.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 41.759482, 
                        lng : 140.703472,
                    },
                    name: 'Mount Hakodate',
                    link: 'http://www.japan-guide.com/e/e5354.html',
                    description: 'Catch sunset here at Mount Hakodate (函館山, Hakodateyama) is a 334 meter high, wooded mountain at the southern end of the peninsula on which much of central Hakodate is located. On clear days and nights, in particular, the views from the mountain are spectacular and included among Japans three best night views alongside the views from Nagasakis Mount Inasa and Kobes Mount Rokko.',
                    time: '5.00 pm',
                    date: '18 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g2/5350_01.jpg',
                        'http://www.japan-guide.com/g3/5354_03.jpg'
                    ]
                }
            ],
            destination: {
                location: {
                    lat : 41.770268, 
                    lng : 140.733235,
                },
                name: 'Super Hotel Hakodate',
                description: 'stay in this hotel for 2 nights',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/superhotelhakodate.html?aid=304142;label=gen173nr-17CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQHoAQH4AQI;sid=91bd6558932844b847a322733af6bdb8;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '6.00 pm',
                date: '18 Oct 2015',
                hotel: {
                    price: 16490,
                    currency: 'yen'
                }
            }
        };

        var day4 = {
            origin: {
                location: {
                    lat : 41.770268, 
                    lng : 140.733235,
                },
                name: 'Super Hotel Hakodate',
                description: 'stay in this hotel for 2 nights',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/superhotelhakodate.html?aid=304142;label=gen173nr-17CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQHoAQH4AQI;sid=91bd6558932844b847a322733af6bdb8;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '8.00 am',
                date: '19 Oct 2015',
                hotel: {
                    price: 16490,
                    currency: 'yen'
                }
            },
            waypoints: [           
                {
                    location: {
                        lat : 41.772384, 
                        lng : 140.725369
                    },
                    name: 'Morning Market',
                    link: 'http://www.japan-guide.com/e/e5353.html',
                    description: 'The Hakodate Morning Market (函館朝市, Hakodate Asaichi) is held daily from 5am (from 6am during winter) to noon, just a few steps away from JR Hakodate Station. The market area spans about four city blocks.',
                    time: '8.30 am',
                    date: '19 Oct 2015',
                    duration: '2 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/5353_01.jpg',
                        'http://www.japan-guide.com/g2/5353_03.jpg',
                        'http://www.japan-guide.com/g2/5353_02.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 41.765091, 
                        lng : 140.710666
                    },
                    name: 'Motomachi',
                    link: 'http://www.japan-guide.com/e/e6725.html',
                    description: 'The harbor of Hakodate was one of the first to be opened to foreign trade in 1854 after Japans era of isolation had come to an end. As a result, many traders from Russia, China and Western countries moved to Hakodate. Motomachi, at the foot of Mount Hakodate, became a district favored among the new foreign residents.',
                    time: '11.00 am',
                    date: '19 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g2/5351_01.jpg',
                        'http://www.japan-guide.com/g2/5351_02.jpg',
                        'http://www.japan-guide.com/g2/5351_03.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 41.765827, 
                        lng : 140.715709,
                    },
                    name: 'Red Brick Warehouses',
                    link: 'http://www.japan-guide.com/e/e5357.html',
                    description: 'Hakodate Port was among the first Japanese ports to be opened to international trade towards the end of the Edo Period (1600-1867). Several red brick warehouses from past trading days survive along the waterfront in the bay area of Hakodate, and have recently been redeveloped into an atmospheric shopping, dining and entertainment complex.',
                    time: '12.00 pm',
                    date: '19 Oct 2015',
                    duration: '0.5 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/5357_01.jpg'
                    ]
                },                                
                {
                    location: {
                        lat : 41.440146, 
                        lng : 140.136119,
                    },
                    name: 'Matsumae',
                    link: 'http://www.japan-guide.com/e/e5380.html',
                    description: 'Matsumae (松前) is a former castle town just west of Cape Shirakami, the southernmost point of Hokkaido. Only 20 kilometers across the Tsugaru Strait from Aomori, Matsumae was the northern limit of Japan during the Edo Period and the sole feudal fief on the otherwise wild, untamed frontier of Hokkaido. The prosperous, 30,000 person town attracted merchants engaged in the shipping trade, and was protected by a garrison at Matsumae Castle, the only Japanese style castle to have been built on Hokkaido.',
                    time: '3.00 pm',
                    date: '19 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g8/5380_04.jpg',
                        'http://www.japan-guide.com/g8/5380_13.jpg'
                    ]
                }
            ],
            destination: {
                location: {
                    lat : 41.770268, 
                    lng : 140.733235,
                },
                name: 'Super Hotel Hakodate',
                description: 'stay in this hotel for 2 nights',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/superhotelhakodate.html?aid=304142;label=gen173nr-17CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQHoAQH4AQI;sid=91bd6558932844b847a322733af6bdb8;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '6.00 pm',
                date: '19 Oct 2015',
                hotel: {
                    price: 16490,
                    currency: 'yen'
                }
            }
        };

        var day5 = {
            origin: {
                location: {
                    lat : 41.770268, 
                    lng : 140.733235,
                },
                name: 'Super Hotel Hakodate',
                description: 'stay in this hotel for 2 nights',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/superhotelhakodate.html?aid=304142;label=gen173nr-17CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQHoAQH4AQI;sid=91bd6558932844b847a322733af6bdb8;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '8.00 am',
                date: '20 Oct 2015',
                hotel: {
                    price: 16490,
                    currency: 'yen'
                }
            },
            waypoints: [           
                {
                    location: {
                        lat : 41.797060, 
                        lng : 140.756702
                    },
                    name: 'Fort Goryokaku',
                    link: 'http://www.japan-guide.com/e/e5352.html',
                    description: 'Fort Goryokaku (五稜郭, Goryōkaku) is a massive, star shaped, Western style citadel, which was built in the last years of the Edo Period for the defense of Hakodate against the imperialist threat posed by the Western powers. A few years later, the fort became the site of a civil war between an army of the shogunate and the superior troops of the newly established Meiji government.',
                    time: '8.30 am',
                    date: '20 Oct 2015',
                    duration: '1.5 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/5352_02.jpg',
                        'http://www.japan-guide.com/g3/5352_01.jpg',
                        'http://www.japan-guide.com/g3/5352_03.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 41.980164, 
                        lng : 140.670576
                    },
                    name: 'Onuma Quasi National Park (Onuma Koen)',
                    link: 'http://www.japan-guide.com/e/e5356.html',
                    description: 'Designated as a "quasi national park" and located only twenty kilometers north of Hakodate, Onuma Park (Onuma Koen) is known for its picturesque, island dotted lakes and majestic dormant volcano, Mount Komagatake.',
                    time: '11.00 am',
                    date: '20 Oct 2015',
                    duration: '2 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g2/5356_01.jpg',
                        'http://www.japan-guide.com/g2/5356_02.jpg',
                        'http://www.japan-guide.com/g2/5356_03.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 42.807005, 
                        lng : 140.653049,
                    },
                    name: 'Niseko',
                    link: 'http://www.japan-guide.com/e/e6720.html',
                    description: 'Niseko is the most famous ski resort in Japan, known for having tons of light powder snow, spectacular backcountry and a large number of foreigners - especially Australians - who in recent years have been responsible for popularizing the resort area with the skiing/snowboarding community outside of Japan. As a result, Nisekos resorts are very accessible and welcoming to foreign visitors, which they keep busy with plenty of vast, long ski runs, endless powder, and a growing number of after-ski activities.',
                    time: '4.00 pm',
                    date: '20 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g8/6720_11.jpg',
                        'http://www.japan-guide.com/g8/6720_15.jpg'
                    ]
                }
            ],
            destination: {
                location: {
                    lat : 43.046495, 
                    lng : 141.357843,
                },
                name: 'Business Inn Norte',
                description: 'stay in this hotel for 1 night',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/business-inn-norte.html?aid=304142;label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQPoAQH4AQI;sid=a7d60ce8da2d1a98ff51609a4ae01387;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '7.00 pm',
                date: '20 Oct 2015',
                hotel: {
                    price: 14850,
                    currency: 'yen'
                }
            }
        };

        var day6 = {
            origin: {
                location: {
                    lat : 43.046495, 
                    lng : 141.357843,
                },
                name: 'Business Inn Norte',
                description: 'stay in this hotel for 1 night',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/business-inn-norte.html?aid=304142;label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQPoAQH4AQI;sid=a7d60ce8da2d1a98ff51609a4ae01387;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '8.00 am',
                date: '21 Oct 2015',
                hotel: {
                    price: 14850,
                    currency: 'yen'
                }
            },
            waypoints: [           
                {
                    location: {
                        lat : 43.358126, 
                        lng : 142.373617
                    },
                    name: 'Furano Winery',
                    link: 'http://www.japan-guide.com/e/e6831.html',
                    description: 'Local wine has been produced in Furano since 1972. Located on a hill overlooking the town, the Furano Winery (富良野ワイン工場, Furano Wine Kōjō) is open to the public and includes free wine tasting. Not far from the factory stands the Restaurant Winehouse where you can try the wines in combination with Western dishes.',
                    time: '10.00 am',
                    date: '21 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g2/6831_01.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 43.321032, 
                        lng : 142.378947
                    },
                    name: 'Cheese Factory',
                    link: 'http://www.japan-guide.com/e/e6827.html',
                    description: 'The Furano Cheese Factory (富良野チーズ工房, Furano Cheese Kōbō) lets visitors observe the production process of the local camembert type cheese from behind windows. Cheese samples, including those of a black cheese colored by squid ink, can be tasted in the factory shop.',
                    time: '11.00 pm',
                    date: '21 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g2/6827_01.jpg',
                        'http://www.japan-guide.com/g2/6827_02.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 43.418765, 
                        lng : 142.427013,
                    },
                    name: 'Furano Flower Fields (Farm Tomita)',
                    link: 'http://www.japan-guide.com/e/e6826.html',
                    description: 'Nowadays, Furanos lavender fields attract large numbers of visitors to the region every summer, when the plants are in full bloom. The majority of lavender usually starts blooming in late June and reaches its peak from around mid July to early August. Less numerous, later flowering varieties of lavender remain in bloom into mid August.',
                    time: '2.00 pm',
                    date: '21 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://en.visit-hokkaido.jp/planyourtrip/modelcourse/img/course06_mainimg.jpg',
                        'http://www.furanotourism.com/spro_cms/upimg/l/20130324220916589_66938.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 43.493672, 
                        lng : 142.614137,
                    },
                    name: 'Blue Pond (Aoiike)',
                    link: 'http://www.japan-guide.com/e/e6832.html',
                    description: 'The Blue Pond (青い池, Aoiike) outside the hot spring town of Shirogane Onsen is named after is deep blue color which it owes to natural minerals dissolved in the water. Not promoted as a tourist spot until recent years, the pond is part of an erosion control system that was built to prevent damage to Biei in case of an eruption by nearby Mount Tokachidake.',
                    time: '3.00 pm',
                    date: '21 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g7/6832_01.jpg',
                        'https://www.followmejapan.jp/files/packages/27/6/95aaa81189cdc593f66088d609d4c378.jpg',
                        'http://i.ytimg.com/vi/110Jl_JK9VE/maxresdefault.jpg',
                        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSusKaka_K4_pfa255VwLF79ax_z54ygGjjsGHEWxz-m9Mt8laSOQ'
                    ]
                },                
                {
                    location: {
                        lat : 43.573007, 
                        lng : 142.438694,
                    },
                    name: 'Biei (Panorama Road)',
                    link: 'http://www.japan-guide.com/e/e6828.html',
                    description: 'Among the areas highlights is Shikisai Hill, a spacious flower park with various flower fields (including lavender), which can be viewed by walking along the trails, by renting golf or buggy carts or by taking a ride on tractor pulled wagons. In winter, snow mobiles are available. Another, smaller flower park is Kanno Farm, located along the national route which connects Biei with Furano.',
                    time: '5.00 pm',
                    date: '21 Oct 2015',
                    duration: 'along the way',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g2/6828_03.jpg',
                        'http://www.japan-guide.com/g2/6828_05.jpg',
                        'http://www.japan-guide.com/g2/6828_02.jpg'
                    ]
                },                
                {
                    location: {
                        lat : 43.588960, 
                        lng : 142.466849
                    },
                    name: 'Biei (Patchwork Road)',
                    link: 'http://www.japan-guide.com/e/e6828.html',
                    description: 'Over the years, the areas beauty has attracted the attention of marketing professionals, and some trees were used in commercials or for package label designs. Among these famous trees are a row of larch trees on the Mild Seven Hill (from a cigarette commercial), a poplar named Ken and Mary Tree (from a car commercial) and the Seven Star Tree (which appeared on cigarette packages). A group of oak trees is known as the Parents and Child Tree.',
                    time: '5.30 pm',
                    date: '21 Oct 2015',
                    duration: 'along the way',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g2/6828_02.jpg',
                        'http://www.japan-guide.com/g2/6828_05.jpg'
                    ]
                }
            ],
            destination: {
                location: {
                    lat : 43.764622, 
                    lng : 142.360866,
                },
                name: 'Court Hotel Asahikawa',
                description: 'stay in this hotel for 3 night',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/court-asahikawa.html?aid=304142;label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQPoAQH4AQI;sid=a7d60ce8da2d1a98ff51609a4ae01387;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '6.30 pm',
                date: '21 Oct 2015',
                hotel: {
                    price: 19000,
                    currency: 'yen'
                }
            }
        };

        var day7 = {
            origin: {
                location: {
                    lat : 43.764622, 
                    lng : 142.360866,
                },
                name: 'Court Hotel Asahikawa',
                description: 'stay in this hotel for 3 night',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/court-asahikawa.html?aid=304142;label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQPoAQH4AQI;sid=a7d60ce8da2d1a98ff51609a4ae01387;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '8.00 am',
                date: '22 Oct 2015',
                hotel: {
                    price: 19000,
                    currency: 'yen'
                }
            },
            waypoints: [           
                {
                    location: {
                        lat : 43.724127, 
                        lng : 142.947170
                    },
                    name: 'Mount Kurodake',
                    link: 'http://www.japan-guide.com/e/e6783.html',
                    description: 'Mount Kurodake (黒岳, Kurodake) is a 1984 meter high peak that towers over Sounkyo Onsen in central Hokkaido. Thanks to a ropeway and chair lift, the mountain is one of the easiest accessible major peaks in Daisetsuzan National Park and a popular entry point for hikes into the interior of the national park.',
                    time: '10.00 am',
                    date: '22 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g9/6783_01.jpg',
                        'http://www.japan-guide.com/g9/6783_03.jpg',
                        'http://www.japan-guide.com/g9/6783_05.jpg'
                    ]
                },
                {
                    location: {
                        lat : 43.728089, 
                        lng : 142.945574
                    },
                    name: 'Sounkyo Onsen',
                    link: 'http://www.japan-guide.com/e/e6777.html',
                    description: 'Sounkyo (層雲峡, Sōunkyō) is a touristy hot spring resort town in the north of Daisetsuzan National Park. It is located in a scenic narrow gorge that is flanked by 100 meter high, forested cliffs. Sounkyo offers a pleasant village center, onsen baths and two beautiful waterfalls nearby. Sounkyo is also a good base for walks and hiking tours into the national park with ropeway access to nearby Mount Kurodake.',
                    time: '2.00 pm',
                    date: '22 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g9/6777_11.jpg',
                        'http://www.japan-guide.com/g9/6777_04.jpg',
                        'http://www.japan-guide.com/g9/6777_03.jpg'
                    ]
                }
            ],
            destination: {
                location: {
                    lat : 43.764622, 
                    lng : 142.360866,
                },
                name: 'Court Hotel Asahikawa',
                description: 'stay in this hotel for 3 night',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/court-asahikawa.html?aid=304142;label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQPoAQH4AQI;sid=a7d60ce8da2d1a98ff51609a4ae01387;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '6.30 pm',
                date: '22 Oct 2015',
                hotel: {
                    price: 19000,
                    currency: 'yen'
                }
            }
        };

        var day8 = {
            origin: {
                location: {
                    lat : 43.764622, 
                    lng : 142.360866,
                },
                name: 'Court Hotel Asahikawa',
                description: 'stay in this hotel for 3 night',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/court-asahikawa.html?aid=304142;label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQPoAQH4AQI;sid=a7d60ce8da2d1a98ff51609a4ae01387;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '8.00 am',
                date: '23 Oct 2015',
                hotel: {
                    price: 19000,
                    currency: 'yen'
                }
            },
            waypoints: [           
                {
                    location: {
                        lat : 43.768309, 
                        lng : 142.479973
                    },
                    name: 'Asahiyama Zoo',
                    link: 'http://www.japan-guide.com/e/e6892.html',
                    description: 'Asahiyama Zoo (旭山動物園, Asahiyama Dōbutsuen) is a very popular zoological garden just outside of central Asahikawa City in the middle of Hokkaido. Its popularity lies in the enclosures which allow visitors to observe the animals from various angles, many of which are unique to Asahiyama Zoo.',
                    time: '10.00 am',
                    date: '23 Oct 2015',
                    duration: '2 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g9/6892_01.jpg',
                        'http://www.japan-guide.com/g2/6892_04.jpg',
                        'http://www.japan-guide.com/g2/6892_03.jpg',
                        'http://www.japan-guide.com/g2/6892_02.jpg',
                        'http://www.japan-guide.com/g2/6892_07.jpg'
                    ]
                },
                {
                    location: {
                        lat : 43.528998, 
                        lng : 142.489131
                    },
                    name: 'Biei Farm',
                    link: 'http://biei-farm.co.jp/',
                    description: 'Got some cow and grass',
                    time: '2.00 pm',
                    date: '23 Oct 2015',
                    duration: '1 hour',
                    type: 'poi',
                    images: [
                        'http://media-cdn.tripadvisor.com/media/photo-s/06/6d/47/0d/caption.jpg',
                        'http://media-cdn.tripadvisor.com/media/photo-s/06/6d/47/0c/caption.jpg'
                    ]
                }
            ],
            destination: {
                location: {
                    lat : 43.764623, 
                    lng : 142.360866,
                },
                name: 'Court Hotel Asahikawa',
                description: 'stay in this hotel for 3 night',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/court-asahikawa.html?aid=304142;label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQPoAQH4AQI;sid=a7d60ce8da2d1a98ff51609a4ae01387;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '6.30 pm',
                date: '23 Oct 2015',
                hotel: {
                    price: 19000,
                    currency: 'yen'
                }
            }
        };

        var day9 = {
            origin: {
                location: {
                    lat : 43.764622, 
                    lng : 142.360866,
                },
                name: 'Court Hotel Asahikawa',
                description: 'stay in this hotel for 3 night',
                type: 'hotel',
                link: 'https://www.booking.com/hotel/jp/court-asahikawa.html?aid=304142;label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaHWIAQGYATG4AQTIAQTYAQPoAQH4AQI;sid=a7d60ce8da2d1a98ff51609a4ae01387;dcid=4;dist=0&sb_price_type=total&type=total&',
                time: '8.00 am',
                date: '24 Oct 2015',
                hotel: {
                    price: 19000,
                    currency: 'yen'
                }
            },
            waypoints: [           
                {
                    location: {
                        lat : 43.070520, 
                        lng : 141.320596
                    },
                    name: 'Curb Market',
                    link: 'http://www.japan-guide.com/e/e5317.html',
                    description: 'Curb Market (札幌場外市場, Sapporo Jōgai Ichiba) consists of nearly 80 stores and restaurants lined up along several blocks just outside of Sapporos Central Wholesale Market. One of the citys largest public markets, the Curb Market specializes in Hokkaido seafood such as crab, sea urchin, salmon roe, squid and scallops, and local produce such as corn, melons and potatoes when in season.',
                    time: '10.00 am',
                    date: '24 Oct 2015',
                    duration: '2 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g7/5317_01.jpg',
                        'http://www.japan-guide.com/g7/5317_02.jpg'
                    ]
                },
                {
                    location: {
                        lat : 43.058383, 
                        lng : 141.358115
                    },
                    name: 'Nijo Market',
                    link: 'http://www.japan-guide.com/e/e5310.html',
                    description: 'Nijo Market (二条市場, Nijō Ichiba) is a public market in central Sapporo that occupies about one city block. Both locals and tourists visit the market to shop for fresh local produce and seafood such as crabs, salmon eggs, sea urchin and various fresh and prepared fish.',
                    time: '12.00 pm',
                    date: '24 Oct 2015',
                    duration: '2 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/5310_01.jpg',
                    ]
                },
                {
                    location: {
                        lat : 43.065692, 
                        lng : 141.363021
                    },
                    name: 'Sapporo Factory',
                    link: 'http://www.japan-guide.com/e/e5314.html',
                    description: 'Sapporo Factory is a large shopping and entertainment complex that was opened in 1993 in central Sapporo. There are about 160 establishments that include clothing stores, souvenir shops, restaurants, cafes and a multi-screen movie theater. The shops are concentrated around a five story atrium that provides visitors a refreshing and spacious atmosphere.',
                    time: '2.00 pm',
                    date: '24 Oct 2015',
                    duration: '2 hour',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/5314_02.jpg',
                    ]
                },
                {
                    location: {
                        lat : 43.059963, 
                        lng : 141.348395
                    },
                    name: 'Odori Park',
                    link: 'http://www.japan-guide.com/e/e5301.html',
                    description: 'Odori Park (大通公園, Ōdōri Kōen) is the broad median of Odori ("large street") in the center of Sapporo, separating the city into north and south. The park stretches about a kilometer and a half over twelve city blocks and offers pleasant green space during the warmer months. In early February, the park serves as the main site of the Sapporo Snow Festival.',
                    time: '5.00 pm',
                    date: '24 Oct 2015',
                    duration: '10 minutes',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/2163_04.jpg'
                    ]
                },
                {
                    location: {
                        lat : 43.062562, 
                        lng : 141.353747
                    },
                    name: 'Clock Tower (Tokeidai)',
                    link: 'http://www.japan-guide.com/e/e5302.html',
                    description: 'The Clock Tower (時計台, Tokeidai) is a symbol of Sapporo. The building was constructed during the early period of Sapporos development in 1878 as a drill hall of the Sapporo Agricultural College. In 1881 a clock purchased from Boston was installed.',
                    time: '7.00 pm',
                    date: '24 Oct 2015',
                    duration: '10 minutes',
                    type: 'poi',
                    images: [
                        'http://www.japan-guide.com/g3/5302_01.jpg',
                        'http://www.japan-guide.com/g3/5302_02.jpg'
                    ]
                }
            ],
            destination: {
                location: {
                    lat : 42.792590,
                    lng: 141.670468
                },
                name: 'Sapporo Airport',
                description: 'leaving',
                type: 'airport',
                link: 'http://www.new-chitose-airport.jp/en/',
                time: '7.30 pm',
                date: '24 Oct 2015'
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
                    console.log(status);
                    defer.reject(status);
                });                

                promises.push(defer.promise);
            });

            return $q.all(promises);
        }

        var googleMapCache = [];
        
        var all = [];
        all.push(day1);
        all.push(day2);
        all.push(day3);
        all.push(day4);
        all.push(day5);
        all.push(day6);
        all.push(day7);
        all.push(day8);
        all.push(day9);

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

                    defer.resolve({
                        path: path,
                        pathInfo: pathInfo
                    });
                });

                return defer.promise;
            }
        };
    });
