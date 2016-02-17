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
                template: "<svg id='svg-link'><use xlink:href='{{icon}}'></use></svg>"
            };
        });
}());
