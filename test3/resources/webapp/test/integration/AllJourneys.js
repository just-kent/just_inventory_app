jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ITEM_STOCK in the list
// * All 3 ITEM_STOCK have at least one ITEM_STOCK

sap.ui.require([
	"sap/ui/test/Opa5",
	"test/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"test/test/integration/pages/App",
	"test/test/integration/pages/Browser",
	"test/test/integration/pages/Master",
	"test/test/integration/pages/Detail",
	"test/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "test.view."
	});

	sap.ui.require([
		"test/test/integration/MasterJourney",
		"test/test/integration/NavigationJourney",
		"test/test/integration/NotFoundJourney",
		"test/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});