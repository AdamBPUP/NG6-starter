import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentsComponent from './agents.component';
import agent from '../agent/agent';

let agentsModule = angular.module('agents', [
        uiRouter,
        agent
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('agents', {
                url: '/agents',
                component: 'agents'
            });
    })
    .component('agents', agentsComponent)
    .name;

export default agentsModule;