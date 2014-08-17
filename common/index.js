angular.module('common', ['ui.router'])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/posts');
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts', {
        abstract: true,
        template: '<ui-view/>'
      });
  })
  .config(function ($stateProvider, PostsIndexResolve) {
    $stateProvider
      .state('posts.index', {
        url: '/posts',
        controller: 'PostsIndexCtrl',
        templateUrl: '/common/posts/index.html',
        resolve: PostsIndexResolve
      });
  });
