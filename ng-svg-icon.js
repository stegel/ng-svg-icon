(function () {
	"use strict";
	angular.module("sn.ng-svg-icon", []).
		directive("snNgSvgIcon", function () {
			return {
                restrict: 'E',
                replace: true,
                scope: {
                    icon: "=icon"
                },
                template: "<svg viewbox='0 0 100 100' id='svg-link'><use xlink:href='{{icon}}'></use></svg>"
            };
        });
}());
