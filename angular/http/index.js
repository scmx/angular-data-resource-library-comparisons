angular.module('resolves', [])
  .constant('PostsIndexResolve', {
    posts: function (Post) {
      return Post.all();
    }
  });
angular.module('app', ['resolves', 'common'])
  .factory('Post', function ($http) {
    function Post () {
    }
    Post.all = function () {
      return $http.get('/api/posts')
        .then(function (response) {
          return response.data.posts;
        });
    };
    return Post;
  })
  .controller('PostsIndexCtrl', function (posts, $scope) {
    $scope.posts = posts;
  });
