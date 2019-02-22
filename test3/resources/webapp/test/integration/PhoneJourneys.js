jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"test/test/integration/NavigationJourneyPhone",
		"test/test/integration/NotFoundJourneyPhone",
		"test/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});