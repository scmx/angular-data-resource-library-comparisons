angular.module('resolves', [])
  .constant('PostsIndexResolve', {
    posts: function (Post) {
      return Post.query();
    }
  });
angular.module('app', ['resolves', 'common', 'rails'])
  .factory('Post', function (railsResourceFactory) {
    return railsResourceFactory({
      url: '/api/posts',
      name: 'post'
    });
  })
  .controller('PostsIndexCtrl', function (posts, $scope) {
    $scope.posts = posts;
  });
