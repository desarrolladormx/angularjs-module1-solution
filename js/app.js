(function(){
  'use strict';
  angular.module('LunchCheck',[])

  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchText = "";
    $scope.message = "";
    $scope.checkLunch = function() {
      var arrayLunch = [];
      arrayLunch = $scope.lunchText.split(',');
      console.log(arrayLunch.length);
      if($scope.lunchText != "") {
        if(arrayLunch.length <= 3) {
          $scope.message = "Enjoy!";
        } else if(arrayLunch.length >= 3) {
          $scope.message = "Too much!";
        }
      } else {
        $scope.message = "Please enter data first";
      }

    }
  }

})();
