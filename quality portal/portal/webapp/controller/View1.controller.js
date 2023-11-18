sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("portalportal.controller.View1", {
	onClick:function()
	{
		var user=this.getView().byId("user").getValue();
		var pass=this.getView().byId("pass").getValue();
		if(user==="SURESH"&& pass==="12345678")
		{
			window.console.log("success");
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
			oR.navTo("View2");
	}
	else
	{
		window.console.log("invalid");
	}}
	});
});