sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("portalportal.controller.View2", {
		onbclick:function()
	{
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
			oR.navTo("View3");
	},
	oncclick:function()
	{
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
			oR.navTo("View4");
	},
	ondclick:function()
	{
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
			oR.navTo("View2");
	},
	oneclick:function()
	{
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
			oR.navTo("View1");
	},
		onuclick:function()
	{
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
			oR.navTo("View5");
	},
	onInit: function()
	{
	
		var url = "/sap/opu/odata/sap/ZODATA_SV_QP_SRV/";
		var d;
		var oe= new sap.ui.model.odata.ODataModel(url,true);
		oe.read("zodata_sv_qp_inspectSet?$filter=Plant eq '1001' &$format=json",{
			context:null,
			urlParameter:null,
			async:false,
			success:function(oData,oResponse)
			{
				d=oData.results;
				
			}
		}
		);
		var oen=new sap.ui.model.json.JSONModel();
		oen.setData({
			"results":d
		});
		this.getView().byId("Mara").setModel(oen);
		
	}

	});

});