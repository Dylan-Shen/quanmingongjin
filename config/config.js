var app = angular.module('app', ['ui.router','ngResource']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/homepage');
	$urlRouterProvider.when('/userperson/userSetting','/userperson/userSetting/1');
	$stateProvider.state('homepage',{
		url:'/homepage',
		templateUrl:'view/homepageView.html',
		controller:'homepageCtrl'
	}).state('detail',{
		url:'/detail/:id',
		templateUrl:'view/detailView.html',
		controller:'detailCtrl'
	}).state('user',{
		url:'/user',
		templateUrl:'view/userView.html',
		controller:'userCtrl'
	}).state('circle',{
		url:'/circle',
		templateUrl:'view/circleView.html',
		controller:'circleCtrl'
	}).state('register',{
		url:'/register',
		templateUrl:'view/registerView.html',
		controller:'registerCtrl'
	}).state('login',{
		url:'/login',
		templateUrl:'view/loginView.html',
		controller:'loginCtrl'
	}).state('program',{
		url:'/program',
		templateUrl:'view/programView.html',
		controller:'programCtrl'
	}).state('program1',{
		url:'/program/:hot',
		templateUrl:'view/programView.html',
		controller:'programCtrl'
	}).state('userperson',{
		url:'/userperson',
		templateUrl:'view/userpersonView.html',
		controller:'userpersonCtrl'
	}).state('userperson.userHome',{
		url:'/userHome',
		templateUrl:'view/userHomeView.html',
		controller:'userHomeCtrl',
	}).state('userperson.userMessage',{
		url:'/userMessage',
		templateUrl:'view/userMessageView.html',
		controller:'userMessageCtrl',
	}).state('userperson.userSetting',{
		url:'/userSetting',
		templateUrl:'view/userSettingView.html',
		controller:'userSettingCtrl'
	}).state('userperson.userSetting.1',{
		url:'/1',
		templateUrl:'view/userSettingView1.html',
		controller:'userSettingCtrl',
	}).state('userperson.userSetting.2',{
		url:'/2',
		templateUrl:'view/userSettingView2.html',
		controller:'userSettingCtrl',
	}).state('userperson.userSetting.3',{
		url:'/3',
		templateUrl:'view/userSettingView3.html',
		controller:'userSettingCtrl',
	}).state('userperson.userCircle',{
		url:'/userCircle',
		templateUrl:'view/userCircleView.html',
		controller:'userCircleCtrl',
	}).state('userperson.userRecord',{
		url:'/userRecord',
		templateUrl:'view/userRecordView.html',
		controller:'userRecordCtrl',
	}).state('support',{
		url:'/support/:id/:reprice/:num',
		templateUrl:'view/supportView.html',
		controller:'supportCtrl'
	}).state('support.class1',{
		url:'/class1',
		templateUrl:'view/support1View.html'
	}).state('support.class2',{
		url:'/class2',
		templateUrl:'view/support2View.html'
	}).state('support.class3',{
		url:'/class3',
		templateUrl:'view/support3View.html'
	}).state('support.class2.supportBox1',{
		url:'/supportBox1',
		templateUrl:'view/supportBox1View.html'
	}).state('support.class2.supportBox2',{
		url:'/supportBox2',
		templateUrl:'view/supportBox2View.html'
	})
}]);
app.directive('appHeader',function(){
	return{
		templateUrl:'view/header.html',
	}
});
app.directive('appFooter',function(){
	return{
		templateUrl:'view/footer.html',
	}
});
app.controller('importantCtrl', ['$scope','$resource','$rootScope','$timeout',function($scope,$resource,$rootScope,$timeout){
	$rootScope.currentUser = [];
	if(localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser")){
		$rootScope.loginShow = true;
	}else{
		$rootScope.loginShow = false;
	}
	$rootScope.key = localStorage.currentUser || sessionStorage.currentUser;
	$scope.cancelFn = function(){
		alert("退出成功!");
		$rootScope.loginShow = false;
		localStorage.removeItem("currentUser");
		sessionStorage.removeItem("currentUser");
	}
	var Info1 = $resource('message.json');
	var Info2 = $resource('person1.json');
	Info1.get(function(res){
		$scope.message = res.message;
		$scope.filmClassName = res.filmClassName;
		$scope.cooperativeSrc = res.cooperativeSrc;
		$scope.currentHot = res.currentHot;
		$scope.userImg = res.userImg;
		$scope.start = res.start;
		$scope.start1 = res.start1;
		$scope.payBank = res.payBank;
	},function(error){
	});
	Info2.get(function(res){
		$scope.deal = res.deal;
		$scope.attention = res.attention;
		$scope.userMessage = res.userMessage;
	},function(error){
	});
}]);
