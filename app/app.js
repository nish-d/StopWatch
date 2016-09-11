'use strict';
/**
 *
 * @param i time
 * @returns {number|*} normalised and formatted time
 */
function checkTime(i) {
    i = (i < 1) ? 0 : i;
    if (i < 10) {
        i = "0" + i;
    }  // add zero in front of numbers < 10
    return i;
}
// Declare app level module which depends on views, and components
var myApp = angular.module('timer', []);
myApp.service('initService', function () {
    this.timeSchedule = {     //timeSchedule class with a list called history
        history: []
    };
});
var tmPromise;
myApp.controller('timerCtrl', ['$scope', '$timeout', 'initService', function ($scope, $timeout, initService) {
    $scope.startTime = 0;
    $scope.endTime = 0;
    $scope.mode = "Start";
    $scope.time = "00:00:00";
    $scope.timeSchedule = initService.timeSchedule;
    $scope.btnClass = 'btn btn-success';
    $scope.users = [
        {name: "Player 1"}
    ];
   /// $scope.newuser={name: "New Player"};
    $scope.user=$scope.users[0];
    /**
     *@func startTimer
     *  trigger timer to start,
     *  recursive, call again when timer expires
     */
    function startTimer() {
        $scope.mode = "Stop";
        var today = new Date();

        $scope.endTime = today.getTime();
        var ms = Math.floor(($scope.endTime - $scope.startTime) / 1000);
        var h = checkTime(Math.floor(ms / 3600));
        ms = Math.floor(ms % 3600);
        var m = checkTime(Math.floor(ms / 60));
        ms = Math.floor(ms % 60);
        var s = checkTime(Math.floor(ms));             //seconds
        $scope.time = h + ":" + m + ":" + s;

        // timer expired, restart timer
        tmPromise = $timeout(function () {
            startTimer();
        }, 500);

    }

    function stopTimer() {
        $scope.mode = "Start";
        $timeout.cancel(tmPromise);
        $scope.time = "00:00:00"
        $scope.timeSchedule.history.push([$scope.user.name, $scope.startTime, $scope.endTime, ($scope.endTime - $scope.startTime) / 1000]);
    }

    $scope.toggleTimer = function () {
        if ($scope.mode === 'Start') {
            $scope.time = "00:00:00"
            startTimer();
            $scope.startTime = new Date().getTime();
            $scope.btnClass = 'btn btn-danger';
        }
        else {
            $scope.time = "00:00:00"
            $scope.btnClass = 'btn btn-success';
            stopTimer();

        }
    };

    $scope.addNewUser=function(xyz){
        $scope.users.push({name: xyz.name});
        $scope.user=xyz;
    };
}]);