angular.module("umbraco")
    .controller("Mooce.MdiIconPicker",
    function ($scope,assetsService) {
        
        //load in mdi css
        assetsService.loadCss("/App_Plugins/MooceMdiIconPicker/css/materialdesignicons.css");
    });