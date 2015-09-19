var Immutable = require('immutable');
require('core-js/es5');
var projectContext = require.context('../app', true, /^((?!__tests__).)*.jsx?$/);
var projectModuleIds = Immutable.Set(
  projectContext.keys().map(module => (
    String(projectContext.resolve(module))
  ))
);
beforeEach(() => {
  var cache = require.cache;
  projectModuleIds.forEach(id => delete cache[id]);
  jasmine.clock().install();
});
afterEach(() => {
  jasmine.clock().uninstall();
});
var context = require.context('../app', true, /-test\.jsx?$/);
context.keys().forEach(context);
