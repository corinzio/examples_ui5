jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"tumblr/corinzio/manageproducts/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"tumblr/corinzio/manageproducts/test/integration/pages/Worklist",
		"tumblr/corinzio/manageproducts/test/integration/pages/Object",
		"tumblr/corinzio/manageproducts/test/integration/pages/NotFound",
		"tumblr/corinzio/manageproducts/test/integration/pages/Browser",
		"tumblr/corinzio/manageproducts/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "tumblr.corinzio.manageproducts.view."
	});

	sap.ui.require([
		"tumblr/corinzio/manageproducts/test/integration/WorklistJourney",
		"tumblr/corinzio/manageproducts/test/integration/ObjectJourney",
		"tumblr/corinzio/manageproducts/test/integration/NavigationJourney",
		"tumblr/corinzio/manageproducts/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
