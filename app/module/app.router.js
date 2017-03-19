'use strict';
angular.module('app')
    .run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
)

.config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider
        .otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'module/template/home/home.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('module/template/home/home.ctrl.js');
                }]
            }
           
        })

        .state('home.menu1', {
            url: '/menu1',
            templateUrl: 'module/template/home/home.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('module/template/home/home.ctrl.js');
                }]
            }
           
        })

        .state('time-table', {
            url: '/time-table',
            templateUrl: 'module/template/time-table/show-time-table.html',
            controller: 'ShowTimeTableCtrl',
            controllerAs: 'showTimeTableCtrl',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([
                            "module/template/time-table/show-time-table.ctrl.js",
                            "module/template/time-table/show-time-table.service.js"
                    ]);
                }]
            }
           
        })
        // .state('calculator', {
        //     url: '/calculator',
        //     templateUrl: 'module/tab1/calculator.html',
        //     controller: 'CalculatorCtrl as calculatorCtrl',
        //     controllerAs: 'calculatorCtrl',
        //     resolve: {
        //         loadMyCtrl: function($ocLazyLoad) {
        //             // you can lazy load files for an existing module
        //             return $ocLazyLoad.load('module/tab1/calculator.js');
        //         }
        //     }
           

        // });

             
}])



