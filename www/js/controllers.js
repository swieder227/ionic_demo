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

	// Two-way binding
	// https://github.com/angular/angular.js/wiki/Understanding-Scopes
	$scope.data = {
		//Input Fields
		rollTitle:'',
		rollLoc:'',
		//Social Media
		facebookEnabled:false,
		twitterEnabled:false,
	};

	// Submission fn checks 'required' fields
	$scope.submit = function(){
		if($scope.data.prerollForm.$valid){
			alert("pass");
		} else {
			alert("fail");
		}
	};


})

// .controller('DashCtrl', function($scope) {})

// .controller('ChatsCtrl', function($scope, Chats) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   }
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('FriendsCtrl', function($scope, Friends) {
//   $scope.friends = Friends.all();
// })

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
