angular.module('NoteWrangler').controller('UserIndexController', function(User, $scope){
	$scope.users = User.query();
	$scope.search = {};
});