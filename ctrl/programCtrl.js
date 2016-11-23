app.controller('programCtrl', ['$scope','$stateParams','$timeout', function($scope,$stateParams,$timeout){
	$scope.filmShowIndex1 = 0;
	$scope.filmShowIndex2 = 0;
	$scope.filmShow11 = $scope.filmClassName[0];
	$scope.filmShow22 = $scope.start[0];
	if($stateParams.hot){
		$scope.filmShowIndex3 = 1;
		$scope.filmShow33 = $scope.start1[1];
	}else{
		$scope.filmShowIndex3 = 0;
		$scope.filmShow33 = $scope.start1[0];
	}
	$scope.filmShow1 = function(index){
		$scope.filmShowIndex1 = index;
		$scope.filmShow11 = $scope.filmClassName[index];
		$scope.mainShow();
	}
	$scope.filmShow2 = function(index){
		$scope.filmShowIndex2 = index;
		$scope.filmShow22 = $scope.start[index];
		$scope.mainShow();
	}
	$scope.filmShow3 = function(index){
		$scope.filmShowIndex3 = index;
		$scope.filmShow33 = $scope.start1[index];
		$scope.mainShow();
	}
	$scope.mainShow = function(){
		$timeout(function(){
			$scope.mainShowState = (angular.element(document.querySelector('.homepage-mainof-2-list')).children('li').length == 0);
		},20)
	}
	$scope.filmFn = function(e){
		if($scope.filmShow11 == $scope.filmClassName[0]){
			return e.start == $scope.filmShow22 && e.start1 == $scope.filmShow33;
		}else{
			return e.class == $scope.filmShow11 && e.start == $scope.filmShow22 && e.start1 == $scope.filmShow33;
		}
	}
	$scope.mainShow();
}])