app.controller('userMessageCtrl', ['$scope', function($scope){
	$scope.myShow = [];
	for( var i = 0 ; i < $scope.filmClassName.length ; i ++ ){
		$scope.myShow[i] = false;
	}
	$scope.radioBoxFn = function(index){
		$scope.myShow[index] = !$scope.myShow[index];
	}
	$scope.radioBoxFn1Show = true;
	$scope.radioBoxFn1Index = 1;
	$scope.radioBoxFn1 = function(index){
		if($scope.radioBoxFn1Index != index){
			$scope.radioBoxFn1Index = index;
			$scope.radioBoxFn1Show = !$scope.radioBoxFn1Show;
		}
	}
 }])