class AgentsController {
    constructor($scope, $http) {
        this.name = 'agents';
        $scope.searchText = '';
        $scope.agentResults = [];
        $scope.findAgents = function() {
            $http.get(`https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=${$scope.searchText}`)
                .then(function(data) {
                    $scope.agentResults = data.data.Results;
                });
        }
    }
}
AgentsController.$inject = ["$scope", "$http"];

export default AgentsController;