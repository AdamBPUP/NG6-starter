import angular from 'angular';
import Home from './home/home';
import Agents from './agents/agents';
import About from './about/about';

let componentModule = angular.module('app.components', [
    Home,
    About,
    Agents
])

.name;

export default componentModule;