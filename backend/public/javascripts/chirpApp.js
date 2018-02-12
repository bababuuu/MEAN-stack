var app = angular.module('chirpApp', ['ngRoute']).run(function($rootScope){
	//global var boolean flag to check if user authetnicated
	$rootScope.authenticated = false;
	$rootScope.current_user = "";

});


app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		//the signup display
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		});
});

app.controller('mainController', function($scope){
	$scope.posts = [];
	$scope.newPost = {create_by: '', text: '', create_at: ''};

	$scope.post = function(){
		//add timestamp
		$scope.newPost.created_at = Date.now();
		//push this post 
		$scope.posts.push($scope.newPost);
		//reset new post
		$scope.newPost = {created_by: '', text: '', created_at: ''};
	};
});

app.controller('authController', function($scope, $rootScope, $http, $location){
	// $scope.user = {username: '', password: ''};
	// $scope.error_message = '';

	$scope.login = function(){
		$http.post('/auth/login', $scope.user).then(function(response){
			$rootScope.authenticated = true;
			$rootScope.current_user = response.data.user.username;
			$location.path('/');
		});
	};

	$scope.register = function(){
		$http.post('/auth/signup', $scope.user).then(function(response){
			$rootScope.authenticated = true;
			$rootScope.current_user = response.data.user.username;
			$location.path('/');
		});
	};
	
});