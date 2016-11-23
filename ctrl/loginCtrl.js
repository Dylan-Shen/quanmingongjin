app.controller('loginCtrl', ['$scope','$rootScope','$interval','$timeout','$state',function($scope,$rootScope,$interval,$timeout,$state){
	$scope.loginBtnShow = false;
	$scope.loginTelShow = true;
	$scope.changeFn = function(text){
		if(text == $scope.loginTelNum){
			$scope.loginTelShow = false;
		}else{
			$scope.loginTelShow = true;
		}
	}
	$scope.loginBtnFn = function(){
		$scope.loginTelShow = true;
		$scope.loginBtnShow = !$scope.loginBtnShow;
		var i = 10;
		$scope.loginTelNum = Math.round(Math.random() * 10000);
		$scope.userPhoneValue = "您的验证码为 :  "+$scope.loginTelNum;
		userForm.loginBtnValue.innerHTML= i + "s后可再次获取";
		$interval(function(){
			userForm.loginBtnValue.innerHTML= i + "s后可再次获取";
			i--;
		},1000,11);
		$timeout(function(){
			$scope.loginBtnShow = false;
			userForm.loginBtnValue.innerHTML = "点击获取验证码";
		},11000);
	}
	function getId(){
		var i = String(new Date().getTime());
		return hex_md5(i);
	}
	$rootScope.loginSubmitFn = function(){
		var userId = getId();
		var message = {"phone":userForm.userPhone.value,"password":userForm.userPassword.value}
		if(window.localStorage){
			localStorage.setItem(userId,JSON.stringify(message));
		}
		alert("注册成功");
		$state.go('register');
	}
}])