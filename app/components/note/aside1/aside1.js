angular.module('app')
  .component('aside1', {
    templateUrl: './app/components/note/aside1/aside1.html',
    bindings: {
      selectedCategory: '<',
      categories: '<',
      siteConfig: '<'
    },
    controller: function () {
      var vm = this;
      vm.$onInit = function () {

      }
    }
  });