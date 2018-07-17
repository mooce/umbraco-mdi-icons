angular.module("umbraco")
    .controller("Mooce.MdiIconPicker",
    ['$scope', '$http', 'assetsService', 'Mooce.MdiIconData', function ($scope, $http, assetsService, mooceMdiIconData) {

        var browserToggled = false;
        
        //load in mdi css
        assetsService.loadCss("https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css");
        assetsService.loadCss("/App_Plugins/MooceMdiIconPicker/styles.css");
         
        $scope.icons = mooceMdiIconData.icons;

        $scope.browserQuery = ''

        $scope.hasBrowser = function() {
 
            return browserToggled || !$scope.model.value;
        }

        $scope.toggleBrowser = function($event) {

            $event.preventDefault();

            browserToggled = !browserToggled;

        }

        $scope.hasSelected = function() {

            return !!$scope.model.value;
        }

        $scope.clearIcon = function($event) {

            $event.preventDefault();

            $scope.model.value = '';
            browserToggled = false;
        }

        $scope.selectIcon = function(icon, $event) {

            $event.preventDefault();

            $scope.model.value = icon;
            browserToggled = true;
        }
    }]);