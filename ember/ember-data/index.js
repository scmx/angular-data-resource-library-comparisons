window.App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

App.Router.map(function () {
  this.resource('posts', { path: '/' }, function () {
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('post');
  }
});

App.PostsIndexRoute = App.PostsRoute.extend({
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  body:  DS.attr('string')
});

App.PostsController = Ember.ArrayController.extend({
  actions: {
  }
});
