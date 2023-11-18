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
	onInit: function()
	{
	
		var url = "/sap/opu/odata/sap/Z_ARR_ODATA_SF_SRV/";
		var d;
		var oe= new sap.ui.model.odata.ODataModel(url,true);
		oe.read("ZODATA_ARR_SF_PRODORDERSet?$filter=Plant eq '0001'&$format=json",{
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