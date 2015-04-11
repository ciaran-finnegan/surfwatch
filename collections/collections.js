/**
 * Created by cfinnegan on 06/04/15.
 */
SurfSpotList = new Mongo.Collection('surfSpots');
WindStationList = new Mongo.Collection('windStations');

SurfSpotList.insert(
    {
        name: "Sharkies",
        type: "reef",
        breakDirection: "left and right",
        classification: "intermediate",
        offshoreWindDirection: "NorthWest",
        bestSwellDirections: "SouthEast, East, NorthEast"

    }
);

WindStationList.insert(
    {
        "sort_order": 0,
        "wmo": 94749,
        "name": "Bellambi",
        "history_product": "IDN60701",
        "local_date_time": "06/01:00pm",
        "local_date_time_full": "20150406130000",
        "aifstime_utc": "20150406030000",
        "air_temp": 23.3,
        "cloud": "Partly cloudy",
        "cloud_base_m": 2910,
        "cloud_oktas": 3,
        "cloud_type": "-",
        "cloud_type_id": null,
        "gust_kt": 9,
        "lat": -34.4,
        "lon": 150.9,
        "press": null,
        "press_tend": "-",
        "rain_trace": "0.2",
        "sea_state": "-",
        "swell_dir_worded": "-",
        "swell_height": null,
        "swell_period": null,
        "vis_km": "-",
        "weather": "-",
        "wind_dir": "NE",
        "wind_spd_kt": 7
    }
);


