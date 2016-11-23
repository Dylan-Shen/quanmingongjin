app.controller('userHomeCtrl', ['$scope',function($scope){
	$scope.attentionMessage = [];
	for(var i = 0 ; i < $scope.attention.length ; i ++ ){
		$scope.attentionMessage.push($scope.message[i]);
	}
	$scope.hotMessage = [];
	for(var j = 0 ; j <$scope.currentHot.length ; j ++ ){
		$scope.hotMessage.push($scope.message[j]);
	}
	$scope.showA1 = true;
	$scope.showA2 = true;
	$scope.showText = ['查看更多','收起'];
	$scope.showNum1 = [4,$scope.attention.length];
	$scope.showNum2 = [3,$scope.currentHot.length];
	$scope.showMore1 = function(){
		$scope.showA1 = !$scope.showA1;
	}
	$scope.showMore2 = function(){
		$scope.showA2 = !$scope.showA2;
	}
}])