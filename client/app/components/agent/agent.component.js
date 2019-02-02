import template from './agent.html';
import controller from './agent.controller';
import './agent.scss';

let agentComponent = {
    bindings: {
        imageUrl: '@',
        agentName: '@',
        agencyName: '@'
    },
    template,
    controller
};

export default agentComponent;