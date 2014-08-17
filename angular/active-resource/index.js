angular.module('resolves', [])
  .constant('PostsIndexResolve', {
    posts: function (Post) {
      return Post.all();
    }
  });
angular.module('app', ['resolves', 'common', 'ActiveResource'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('arrayHttpInterceptor')
  })
  .factory('arrayHttpInterceptor', function ($q) {
    return {
      response: function (response) {
        var contentType = response.headers()['content-type']
        if (contentType.indexOf('application/json') != -1) {
          if (response.data.posts) {
            response.data = response.data.posts;
          }
        }
        return response;
      },
      responseError: function (response) {
        $q.reject(response)
      }
    };
  })
  .factory('Post', function (ActiveResource) {
    function Post(data) {
      this.number('id');
      this.string('title');
      this.string('body');
    }

    Post.inherits(ActiveResource.Base);
    Post.api.set('/api');

    return Post;
  })
  .controller('PostsIndexCtrl', function (posts, $scope) {
    $scope.posts = posts;
  });
