app.controller('homepageCtrl',['$scope','$interval',function($scope,$interval){
	$scope.detailsShow = function(index){
		$scope.show[index] = true;
	}
	$scope.flag = 0;
	var timer = $interval(function(){
		if ( $scope.flag >= $scope.message.length-1 ){
			$scope.flag = 0;
			return;
		}
		$scope.flag++;
	},2000);
	$scope.bannerPrev = function(){
		$interval.cancel(timer);
		$scope.flag--;
		if($scope.flag < 0){
			$scope.flag = $scope.message.length-1
		}
		timer = $interval(function(){
		if ( $scope.flag >= $scope.message.length-1 ){
				$scope.flag = 0;
				return;
			}
			$scope.flag++;
		},2000);
	}
	$scope.bannerNext = function(){
		$interval.cancel(timer);
		$scope.flag++;
		if($scope.flag == $scope.message.length){
			$scope.flag = 0
		}
		timer = $interval(function(){
		if ( $scope.flag >= $scope.message.length-1 ){
				$scope.flag = 0;
				return;
			}
			$scope.flag++;
		},2000);
	}
}]);

