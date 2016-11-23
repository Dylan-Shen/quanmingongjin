app.controller('detailCtrl', ['$scope',"$stateParams","$rootScope","$state",function($scope,$stateParams,$rootScope,$state){
	$scope.userSupportFn = function(a,b){
		if($rootScope.currentUser == ''){
			alert("请登录您的账号!");
			$state.go("register");
		}else{
			$state.go( "support.class1",{'id':a,'reprice':b})
		}
	}
	$scope.item = $scope.message[$stateParams.id];
	$scope.showIndex = 1;
	$scope.detailLeftShow = function(index){
		$scope.showIndex = index;
	}
	$scope.addTree = function(){
		var course = $scope.item.course;
		if($('.tree-box').find('.tree-text').length < 2){
			$('.tree-box').css({height:course.length*120});
			for( var i = 0 ; i < course.length ; i ++ ){
				$('<div/>',{
					class:'tree-box1',
				}).css({top:50+120*i}).appendTo($('.tree-box'));
				$('<div/>',{
					class:'tree-circle',
				}).css({top:40+120*i,left:-10}).appendTo($('.tree-box'));

				$('<div/>',{
					class:'tree-text',
				}).css({top:40+120*i}).appendTo($('.tree-box'));
			}
			var index = 0;
			for( var i = 0 ; i < course.length ; i ++ ){
				$('<h5/>').text(course[i].time).appendTo($('.tree-text')[i]);
				$('<p/>').text(course[i].active).appendTo($('.tree-text')[i]);
				if(course[i].center == false){
					if(index%2 == 0){
						$('.tree-box1').eq(i).css({left:-50});
						$('.tree-text').eq(i).css({left:-250,"text-align":"right"})
					}if(index%2 == 1){
						$('.tree-box1').eq(i).css({left:0});
						$('.tree-text').eq(i).css({left:50,"text-align":"left"})
					}
					index++;
				}else{
					$('.tree-box1').eq(i).hide();
					$('.tree-circle').eq(i).hide();
					$('.tree-text').eq(i).css({left:-110,"text-align":"center","padding":"10px",
						"background":"#ff4200","border-radius":"4px"}).find('p').css({color:'#fff'})
				}
			}
		}
	}
}])