sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, Toast) {
	"use strict";
  return Controller.extend("opensap.myapp.controller.App", {
      onInit : function() {
        console.log("Init App Controller");
				//get model in a property of the controller
				this.helloPanel = this.getOwnerComponent().getModel("helloPanel");
				this.i18n = this.getOwnerComponent().getModel("i18n").getResourceBundle();
      },
  		onShowHello : function () {
				var msg = this.i18n.getText("helloMsg", [this.helloPanel.getProperty("/recipient/name")]);
  			// show a native JavaScript alert
  			Toast.show( msg ,
        {
            duration: 1500,
            my: "right top",
            at: "right top"
        }
        );
  		}

  	});
});