angular.module('resolves', [])
  .constant('PostsIndexResolve', {
    posts: function (Restangular) {
      return Restangular.all('posts').getList();
    }
  });
angular.module('app', ['resolves', 'common', 'restangular'])
  .config(function(RestangularProvider) {
    RestangularProvider.addResponseInterceptor(arrayInterceptor);
    function arrayInterceptor(data, operation, what, url, response, deferred) {
      var extractedData;
      // .. to look for getList operations
      if (operation === "getList") {
        // .. and handle the data and meta data
        extractedData      = data[what];
      } else {
        extractedData = data[what];
      }
      return extractedData;
    }
  })
  .run(function (Restangular) {
    Restangular.setBaseUrl('/api');
  })
  .controller('PostsIndexCtrl', function (posts, $scope) {
    $scope.posts = posts;
  });
