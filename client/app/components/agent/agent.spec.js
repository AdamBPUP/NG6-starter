import AgentModule from './agent';
import AgentController from './agent.controller';
import AgentComponent from './agent.component';
import AgentTemplate from './agent.html';

describe('Agent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AgentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AgentController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AgentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AgentComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AgentTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AgentController);
    });
  });
});
