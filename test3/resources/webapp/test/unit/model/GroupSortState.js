sap.ui.define([
		"test/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("CC_STOCK_MOV_BAL").length, 1, "The sorting by CC_STOCK_MOV_BAL returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("ItemName").length, 1, "The sorting by ItemName returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("CC_STOCK_MOV_BAL").length, 1, "The group by CC_STOCK_MOV_BAL returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to CC_STOCK_MOV_BAL if the user groupes by CC_STOCK_MOV_BAL", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("CC_STOCK_MOV_BAL");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "CC_STOCK_MOV_BAL", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by ItemName and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "CC_STOCK_MOV_BAL");

		this.oGroupSortState.sort("ItemName");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});