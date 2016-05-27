sap.ui.define([
	"sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, Toast) {
	"use strict";
  return Controller.extend("opensap.myapp.controller.App", {

      onInit : function() {
        console.log("Init App Controller");
      },
  		onShowHello : function () {
  			// show a native JavaScript alert
  			Toast.show("Hello SAPUI5");
  		}

  	});
});
