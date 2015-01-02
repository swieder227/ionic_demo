angular.module('starter.controllers', [])

.controller('PrerollCtrl', function($scope, RSVPS) {
	// Get all RSVPs in list, randomize
	$scope.rsvps = shuffle(RSVPS.all());

	// Shuffle algorithm
	// https://github.com/coolaj86/knuth-shuffle
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	// Two-way data binding
	// .data js object used for correct inheritance
	// https://github.com/angular/angular.js/wiki/Understanding-Scopes
	$scope.data = {
		//Input Fields
		rollTitle:'',
		rollLoc:'',
		//Social Media
		facebookEnabled:false,
		twitterEnabled:false,
	};

	// Filler data for song selection
	$scope.selectedSong = {
		cover: "http://lorempixel.com/100/100/abstract",
		song: "Clarity",
		artist: "Zedd feat Foxes",
	}

	// var used to show form validation
	$scope.errorMsgOn = false;

	// Submission fn checks 'required' fields
	$scope.submit = function(){
		if($scope.data.prerollForm.$valid){
			// pass data
			console.log($scope.data);
		} else {
			//set error msg
			$scope.errorMsgOn = true;
		}
	};


})
