angular.module("NoteWrangler").directive('title', function($timeout){
	return function(scope, element, attrs){
		$(element).on('mouseover', function(e){
			e.preventDefault();
		});

		$timeout(function(){
			$(element).tooltip();
		});

		scope.$on('$destroy', function(){
			$(element).tooltip('destroy');
		});
	};
});