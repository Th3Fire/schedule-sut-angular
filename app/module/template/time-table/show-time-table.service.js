app.service('showTimeTableService', ['$log', '$http', '$q', '$localStorage', function($log, $http, $q, $localStorage) {

    var self = this;

    var deferObject, serviceMethods = {
        getMycourseData: function(user){
            mycourse = [
                {
                    id : 1,
                    name: 'cal I' ,
                    day : 'Mo',
                    time: {
                        start : '09:00',
                        end : '11:00'
                    }
                },

               {
                    id : 2,
                    name: 'Eng I' ,
                    day : 'Mo',
                    time: {
                        start : '13:00',
                        end : '15:00'
                    }
                },

                {
                    id : 3,
                    name: 'cal I' ,
                    day : 'We',
                    time: {
                        start : '09:00',
                        end : '11:00'
                    }
                },

                {
                    id : 4,
                    name: 'Comp I' ,
                    day : 'We',
                    time: {
                        start : '12:00',
                        end : '13:00'
                    }
                },

                {
                    id : 5,
                    name: 'cal II' ,
                    day : 'Fr',
                    time: {
                        start : '09:00',
                        end : '11:00'
                    }
                },
            ];
            return mycourse;
        }
    };

    return serviceMethods;

    

}]);