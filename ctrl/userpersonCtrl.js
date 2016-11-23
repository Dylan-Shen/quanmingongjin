app.controller('userpersonCtrl', ['$scope','$rootScope','$state','$stateParams',function($scope,$rootScope,$state,$stateParams){
	$rootScope.currentUser = $stateParams;
	$scope.screen = ["全部","已支付","未支付"];
	$scope.num = 0;
	$scope.show = '';
	$scope.checkContent = function(i){
		$scope.show = ['',true,false][i];
		$scope.num = i;
	}
}])