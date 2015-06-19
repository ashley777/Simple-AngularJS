 'use strict';

angular.module('myApp.Service',['myApp.Factory']).service("FeedService",function(FeedFactory){
this.get = function(feedSources) {
            
            var feeds = [];
            if (feeds.length === 0) {
                for (var i=0; i<feedSources.length; i++) {
                    FeedFactory.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {
                        var feed = data.responseData.feed;
                        feeds.push(feed);
                    });
                }
            }
            return feeds;
        };
    })

angular.module('myApp.Service').service("FeedPersistService",function(){
    var selectedFeed = [];
    this.setSelectedFeed = function(currentFeed)
    {
        selectedFeed = currentFeed;
        console.log(selectedFeed);
    }

    this.getSelectedFeed = function(currentFeed)
    {
        console.log(selectedFeed);
        return selectedFeed;
    };
})