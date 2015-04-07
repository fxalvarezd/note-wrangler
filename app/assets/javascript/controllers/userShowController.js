angular.module('NoteWrangler').controller('UserShowController', function(User, $scope, $routeParams){
	$scope.user = User.get({id: $routeParams.id});
});