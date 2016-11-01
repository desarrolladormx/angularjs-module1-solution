(function(){
  'use strict';
  angular.module('LunchCheck',[])

  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchText = "";
    $scope.message = "";
    $scope.colorData = 0;
    $scope.checkLunch = function() {
      var arrayLunch = [];
      arrayLunch = $scope.lunchText.split(',');
      var numItems = getNumItems(arrayLunch);
      //console.log("num items array split: "+arrayLunch.length);
      if($scope.lunchText.trim() != "") {
        if(numItems <= 3) {
          $scope.colorData = 1;
          $scope.message = "Enjoy!";
        } else if(numItems > 3) {
          $scope.message = "Too much!";
        }
      } else {
        $scope.message = "Please enter data first";
        $scope.colorData = 2;
      }

      function getNumItems(arrayItems) {
        var countItem = 0;
        angular.forEach(arrayItems, function(item) {
          if(item.trim() != "") {
            countItem = countItem + 1;
          }
        });
        //console.info("Num items: "+countItem);
        return countItem;
      }

    }
  }

})();
