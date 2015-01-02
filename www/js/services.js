angular.module('starter.services', [])

.factory('RSVPS', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var rsvps = [{
    id: 0,
    name: '0 Lorem Ipsum',
    face: 'http://lorempixel.com/125/100/people'
  }, {
    id: 1,
    name: '1 Lorem Ipsum',
    face: 'http://lorempixel.com/126/100/people'
  }, {
    id: 2,
    name: '2 Lorem Ipsum',
    face: 'http://lorempixel.com/127/100/people'
  }, {
    id: 3,
    name: '3 Lorem Ipsum',
    face: 'http://lorempixel.com/128/100/people'
  }, {
    id: 4,
    name: '4 Lorem Ipsum',
    face: 'http://lorempixel.com/129/100/people'
  }, {
    id: 5,
    name: '5 Lorem Ipsum',
    face: 'http://lorempixel.com/130/100/people'
  }, {
    id: 6,
    name: '6 Lorem Ipsum',
    face: 'http://lorempixel.com/131/100/people'
  }, {
    id: 7,
    name: '7 Lorem Ipsum',
    face: 'http://lorempixel.com/132/100/people'
  }, {
    id: 8,
    name: '8 Lorem Ipsum',
    face: 'http://lorempixel.com/133/100/people'
  }, {
    id: 9,
    name: '9 Lorem Ipsum',
    face: 'http://lorempixel.com/134/100/people'
  }, {
    id: 10,
    name: '10 Lorem Ipsum',
    face: 'http://lorempixel.com/135/100/people'
  }, {
    id: 11,
    name: '11 Lorem Ipsum',
    face: 'http://lorempixel.com/136/100/people'
  }, {
    id: 12,
    name: '12 Lorem Ipsum',
    face: 'http://lorempixel.com/137/100/people'
  }];

  return {
    all: function() {
      return rsvps;
    },
    remove: function(rsvp) {
      rsvps.splice(rsvps.indexOf(rsvp), 1);
    },
    get: function(id) {
      for (var i = 0; i < chats.length; i++) {
        if (rsvps[i].id === parseInt(id)) {
          return rsvps[i];
        }
      }
      return null;
    }
  }
})


// .factory('Chats', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//   }, {
//     id: 2,
//     name: 'Andrew Jostlin',
//     lastText: 'Did you get the ice cream?',
//     face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
//   }, {
//     id: 3,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//   }, {
//     id: 4,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
//   }];

//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   }
// })

// /**
//  * A simple example service that returns some data.
//  */
// .factory('Friends', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   // Some fake testing data
//   var friends = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     notes: 'Enjoys drawing things',
//     face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     notes: 'Odd obsession with everything',
//     face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//   }, {
//     id: 2,
//     name: 'Andrew Jostlen',
//     notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
//     face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
//   }, {
//     id: 3,
//     name: 'Adam Bradleyson',
//     notes: 'I think he needs to buy a boat',
//     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//   }, {
//     id: 4,
//     name: 'Perry Governor',
//     notes: 'Just the nicest guy',
//     face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
//   }];


//   return {
//     all: function() {
//       return friends;
//     },
//     get: function(friendId) {
//       // Simple index lookup
//       return friends[friendId];
//     }
//   }
// });
