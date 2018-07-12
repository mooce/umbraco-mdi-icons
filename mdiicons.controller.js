angular.module("umbraco")
    .controller("Mooce.MdiIconPicker",
    function ($scope,assetsService) {
        
        //load in mdi css
        assetsService.loadCss("/App_Plugins/MooceMdiIconPicker/css/materialdesignicons.css");

        $scope.icons = [
            'mdi-access-point',
            'mdi-account'
        ]

        $scope.query = ''

        $scope.pick = function(icon) {

            $scope.model.value = icon;
        }
    });