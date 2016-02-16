'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			users: function (User) {
				return User.findAll();
			},
			posts: function (Post, users) {
				return Post.findAll({});
			}
		}
	});
});

app.controller('MainController', function($scope, posts, Post) {
	$scope.allPosts = posts;
	console.log('posts', posts);

  var dataInJsDataCache = Post.getAll();
  //Post.ejectAll();
  //console.log('ejected data', Post.getAll());
  //Post.inject(dataInJsDataCache);
  console.log('data in jsdata cache: ', dataInJsDataCache);

 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
})


