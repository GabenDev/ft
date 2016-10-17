angular.module('starter.services', ['ngResource'])

.factory('Sessions', function ($resource) {
  return $resource('http://192.168.0.2:5000/sessions');
})

.factory('Session', function ($resource) {
  return $resource('http://192.168.0.2:5000/sessions/:sessionId');
});
