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
});
