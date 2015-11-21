import {interpolateFilter} from './interpolate-filter.js';
import {versionDirective} from './version-directive.js';

export const versionComponent = angular.module('version', [
  'interpolateFilter',
  'versionDirective'
])
.value('version', '0.2');
