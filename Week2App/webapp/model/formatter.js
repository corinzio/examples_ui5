sap.ui.define([], function() {
	"use strict";

	return {
		delivery: function(sMeasure, iWeight) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle(),
				sResult = "";

			if(sMeasure === "G") {
				iWeight = iWeight / 1000;
			}
			if (iWeight < 0.5) {
				sResult = oResourceBundle.getText("formatterMailDelivery");
			} else if (iWeight < 5) {
				sResult = oResourceBundle.getText("formatterParcelDelivery");
			} else {
				sResult = oResourceBundle.getText("formatterCarrierDelivery");
			}

			return sResult;
		},
		formatMapUrl: function(sName,sStreet,sHouse,sCity) {
			var adr= sName+",+"+sStreet+",+"+sHouse+",+"+sCity;
			var ret="https://maps.googleapis.com/maps/api/staticmap?center="+adr+"&size=300x300&markers=color:blue|"+adr+'&key=AIzaSyBUQKCQEjg3RwK_JwrOuTvoVin5IfXKImU';
			//https://maps.googleapis.com/maps/api/staticmap?center=Via+Filippo+Turati+16,+Caorso,+PC&amp;size=300x300&amp;markers=color:blue|Via+Filippo+Turati+16,+Caorso,+PC&amp;key=AIzaSyBUQKCQEjg3RwK_JwrOuTvoVin5IfXKImU
			return ret;
		}
	};
});