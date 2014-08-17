angular.module('resolves', [])
  .constant('PostsIndexResolve', {
    posts: function (Post) {
      return Post.query().$promise;
    }
  });
angular.module('app', ['resolves', 'common', 'ngResource'])
  .factory('Post', function ($resource) {
    var Post = $resource('/api/posts', {}, {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data, headers) {
          data = angular.fromJson(data);
          if (data.posts) {
            data = data.posts;
          }
          return data;
        }
      }
    });
    return Post;
  })
  .controller('PostsIndexCtrl', function (posts, $scope) {
    $scope.posts = posts;
  });
