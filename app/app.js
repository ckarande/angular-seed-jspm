//import 'modernizr';
import 'normalize.css';
import angular from 'angular';
import 'angular-route';
import 'angular-loader';
import {view1} from 'view1/view1.js';
import {view2} from 'view2/view2.js';
import {versionComponent} from 'versionComponent';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  view1.name,
  view2.name,
  versionComponent.name
]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["myApp"]);
});