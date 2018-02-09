var app = angular.module('chirpApp', ['ngRoute']);


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

app.controller('authController', function($scope){
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function(){
		//placeholder until authentication is implemented
		$scope.error_message = 'login request for ' + $scope.user.username;
	}

	$scope.register = function(){
		//placeholder until authentication is implemented
		$scope.error_message = 'registration request for ' + $scope.user.username;
	}
	
});