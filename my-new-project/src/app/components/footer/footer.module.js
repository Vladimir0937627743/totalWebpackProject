'use strict';

import footerDirective from './footer.directive';
import 'bootstrap/dist/css/bootstrap.css';
import './footer.scss';
import './themify-icons.css';

const footerModule = angular.module('footer-module', []);

footerModule
  .directive('footerTest', footerDirective);

export default footerModule;
