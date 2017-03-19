'use strict';
app.controller('ShowTimeTableCtrl',['$log', '$localStorage', '$state', '$scope', 'showTimeTableService', function($log, $localStorage, $state, $scope, showTimeTableService) {
    var self = this;
    self.data = showTimeTableService.getMycourseData("B5601233");
    $log.log(self.data);
}]);