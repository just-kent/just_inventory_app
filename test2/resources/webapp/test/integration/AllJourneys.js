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
	"justinvapp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"justinvapp/test/integration/pages/App",
	"justinvapp/test/integration/pages/Browser",
	"justinvapp/test/integration/pages/Master",
	"justinvapp/test/integration/pages/Detail",
	"justinvapp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "justinvapp.view."
	});

	sap.ui.require([
		"justinvapp/test/integration/MasterJourney",
		"justinvapp/test/integration/NavigationJourney",
		"justinvapp/test/integration/NotFoundJourney",
		"justinvapp/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});