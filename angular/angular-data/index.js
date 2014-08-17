angular.module('resolves', [])
  .constant('PostsIndexResolve', {
    posts: function (DS) {
      return DS.findAll('post');
    }
  });
angular.module('app', ['resolves', 'common', 'angular-data.DS'])
  .config(function (DSProvider) {
    DSProvider.defaults.baseUrl = '/api';
  })
  .run(function (DS) {
    DS.defineResource({
      name: 'post',
      endpoint: 'posts',
      deserialize: function (resourceName, response) {
        return response.data.posts;
      }
    });
  })
  .controller('PostsIndexCtrl', function (posts, $scope) {
    $scope.posts = posts;
  });
