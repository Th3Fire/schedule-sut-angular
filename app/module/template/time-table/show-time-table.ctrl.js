'use strict';
app.controller('ShowTimeTableCtrl',['$log', '$localStorage', '$state', '$scope', 'showTimeTableService', function($log, $localStorage, $state, $scope, showTimeTableService) {
    var self = this;
    self.data = showTimeTableService.getMycourseData("B5601233");

   
    //$log.log(self.data);
    var maxTime = 0;
    var minTime = 0;
    self.tempMinTime = 23;
    self.tempMaxTime = 0;
    console.log("min time"+self.tempMinTime);
    findMinStartTime();
    findMaxStartTime();

    var totalDifTime = self.tempMaxTime - self.tempMinTime;
    self.resultTime = [];

    calMaxMin();
    console.log(self.resultTime);

    console.log("res time : " + self.resultTime);

    function findMinStartTime(){
        console.log("find min time");
        for(var i=0; i<self.data.length; i++){
            var splitTime = self.data[i].time.start;
            //console.log(self.data[i].time.start);
            getMomentFromTimeString(splitTime,true);
        }  
    };

    function findMaxStartTime(){
        console.log("find max time");
        for(var i=0; i<self.data.length; i++){
            var splitTime = self.data[i].time.end;
            //console.log(self.data[i].time.end);
            getMomentFromTimeString(splitTime,false);
        }  
    };


    function getMomentFromTimeString(time,checkMin) {
        if (checkMin){
            var time = moment(time, 'HH:mm');
            self.tempMinTime = (time.get('hour') < self.tempMinTime ? time.get('hour') : self.tempMinTime);
            minTime = self.tempMinTime;
            console.log(self.tempMinTime);
            
        }else {
            var time = moment(time, 'HH:mm');
            self.tempMaxTime = (time.get('hour') > self.tempMaxTime ? time.get('hour') : self.tempMaxTime);
            maxTime = self.tempMaxTime;
            console.log(self.tempMaxTime);
        } 
    }

    function calMaxMin(){

        for(var i=0; i<totalDifTime; i++){
            if(minTime < self.tempMaxTime){
                self.resultTime.push(minTime+":00-"+(minTime+1)+":00");
                minTime++;
            }
        }
        
        
    }
    self.getResultTime = function() {
        return new Array(self.resultTime);
    }
    

   

}]);