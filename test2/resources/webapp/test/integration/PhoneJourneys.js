jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"justinvapp/test/integration/NavigationJourneyPhone",
		"justinvapp/test/integration/NotFoundJourneyPhone",
		"justinvapp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});