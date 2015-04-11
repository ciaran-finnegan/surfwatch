SyncedCron.add({
    name: 'getSurfandWind',
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text('every 2 hours');
    },
    job: function() {
        var numbersCrunched = CrushSomeNumbers();
        return numbersCrunched;
    }
});


Meteor.methods({
    'getWindReport':function(wmo){
        return Meteor.http.call('GET','http://www.bom.gov.au/fwo/IDN60701/IDN60701.' + wmo + '.json');
    },
    'getSurfReport':function(mswSpotId){
        return Meteor.http.call('GET','http://magicseaweed.com/api/n0Ca573L9Q6J5DASD1szbAyG07If6KSd/forecast/?spot_id=' + mswSpotId );
    },
});
