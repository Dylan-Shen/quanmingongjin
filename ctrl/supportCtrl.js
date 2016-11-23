app.controller('supportCtrl', ['$scope','$stateParams',function($scope,$stateParams){
	$scope.item = $scope.message[$stateParams.id];
	$scope.reprice = $stateParams.reprice;
	$scope.supportNum = $stateParams.num;
	if($scope.supportNum == 2){
		$('.order>li').eq(0).addClass('order-hide');
	}
	if($scope.supportNum == 3){
		$('.order>li').eq(0).addClass('order-hide');
		$('.order>li').eq(1).addClass('order-hide');
	}
	$scope.payIndex = 0;
	$scope.payFn = function(index){
		$scope.payIndex = index;
	}
}])