'use strict';

angular.module('myApp.controllers',['myApp.Service']).controller('GetTopListController', function ($scope, FeedService, FeedPersistService) {
	    var feedSources = [];
		$scope.linkClicked = function(Moviegenre) {
			if(Moviegenre == "Anime") {
			feedSources = [
                {title: 'Apple', url: 'https://itunes.apple.com/us/rss/topmovies/limit=10/genre=4402/xml'}
            ];}
            else if(Moviegenre == "Action"){
			feedSources = [
                {title: 'Apple', url: 'https://itunes.apple.com/us/rss/topmovies/limit=10/genre=4401/xml'}
            ];
            }
            else if(Moviegenre == "Classics"){
            feedSources = [
                {title: 'Apple', url: 'https://itunes.apple.com/us/rss/topmovies/limit=10/genre=4403/xml'}
            ];
            }
            $scope.feeds = FeedService.get(feedSources);
		};
		$scope.currentPage = 0;
		$scope.pageSize = 5;

		$scope.getDetailedView = function(feedObj){
			console.log('Logger Logged');
			FeedPersistService.setSelectedFeed(feedObj);
		}
	});

angular.module('myApp.controllers').controller('DetailedViewController',function($scope, FeedPersistService){
	$scope.currentFeed = FeedPersistService.getSelectedFeed();
})