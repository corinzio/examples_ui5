sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"opensap/myapp/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Toast, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("opensap.myapp.controller.App", {
		formatter: formatter,

		onInit: function() {
			console.log("Init App Controller");
			//get model in a property of the controller
		},
		onShowHello: function() {
			var i18nModel = this.getView().getModel("i18n").getResourceBundle();
			var helloPanelModel = this.getView().getModel("helloPanel");
			var msg = i18nModel.getText("helloMsg", [helloPanelModel.getProperty("/recipient/name")]);
			// show a native JavaScript alert
			Toast.show(msg, {
				duration: 1500,
				my: "right top",
				at: "right top"
			});
		},
		onFilterProducts: function(oEvent) {

			// build filter array
			var aFilter = [],
				sQuery = oEvent.getParameter("query"),
				// retrieve list control
				oList = this.getView().byId("productsList"),
				// get binding for aggregation 'items'
				oBinding = oList.getBinding("items");

			if (sQuery) {
				aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
			}
			// apply filter. an empty filter array simply removes the filter
			// which will make all entries visible again
			oBinding.filter(aFilter);
		},
		onItemSelected: function(oEvent) {
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("productDetailsPanel");

			oProductDetailPanel.bindElement({
				path: sPath
			});
			this.byId("productDetailsPanel").setVisible(true);
		}

	});
});