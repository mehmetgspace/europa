const App = {
  Europa: {}
};

/**
 * @define DOMContentLoaded
 * @description default actions when page ready
 */
document.addEventListener('DOMContentLoaded', function() {
  App.Europa = new Europa();

  App.Europa.init();
});