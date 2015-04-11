Template.layout.helpers({

    'windreport':function() {
        var wmo = Session.get('wmo');
        // will be null until user changes form
        if (wmo == undefined) {
            wmo = "94749";
        }
        Meteor.call('getWindReport', wmo, function (err, results) {
            Session.set('wind_dir', JSON.parse(results.content).observations.data[0].wind_dir);
            Session.set('wind_spd_kt', JSON.parse(results.content).observations.data[0].wind_spd_kt);
            Session.set('name', JSON.parse(results.content).observations.data[0].name);
            Session.set('local_date_time', JSON.parse(results.content).observations.data[0].local_date_time);
        });
        return (Session.get('name') + ': ' + Session.get('wind_dir') + ', ' + Session.get('wind_spd_kt') + ' knots');
    },
    'surfreport':function() {
        var mswSpotId = Session.get('mswSpotId');
        var windDir = 'not set';

        Meteor.call('getSurfReport', mswSpotId, function (err, results) {

            Session.set('windDirDegrees', JSON.parse(results.content)[0].wind.direction);
            var deg = (Session.get('windDirDegrees'));
            windDir = (getCardinalDirection(deg));
            Session.set('windDir',windDir);
            Session.set('windSpeedMph', JSON.parse(results.content)[0].wind.speed);
            var windSpeedMph = (Session.get('windSpeedMph'));
            var windSpeedknots = Math.round(windSpeedMph * 1.15078);
            Session.set('windSpeedKnots',windSpeedknots);
            Session.set('mswWindDir', JSON.parse(results.content)[0].wind.compassDirection);


            function getCardinalDirection(deg) {
                var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
                var index = Math.floor( ((deg+162.5)%360) / 45 );
                return directions[index+1];
            }
        });
        return (Session.get('windDirDegrees') + ' degrees ' + Session.get('mswWindDir') + ' ' + Session.get('windSpeedMph') + ' mph, '+ Session.get('windSpeedKnots') + ' knots');
    }

});
Template.layout.events({
    'change .wmo':function(evt,tmpl){
        Session.set('wmo',tmpl.find('.wmo').value);
    }
});
Template.layout.events({
    'change .mswSpotId':function(evt,tmpl){
        Session.set('mswSpotId',tmpl.find('.mswSpotId').value);
    }
});