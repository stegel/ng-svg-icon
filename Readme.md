ng-svg-icon
===================

Simple directive to easily place SVG icons in your AngularJS views.

Table of Contents:
* [Features](#features)
* [Install](#install) ([Manual](#manual))
* [Usage](#usage)

##<a name="features"></a>Features
* add SVG-based icons to your views
* resize and style icons via CSS

##<a name="install"></a>Install
* <a name="manual"></a>**Manual**: download latest using *Download ZIP* above


##<a name="usage"></a>Usage

Basic usage:
```html
<script src="angular.min.js"></script>
<script src="ng-svg-icon.js"></script>

<!-- Include your SVG Icon definitions -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
	<symbol id="icon-heart" viewBox="0 0 1024 1024">
		<title>heart</title>
		<path class="path1" d="M934.176 168.48c-116.128-115.072-301.824-117.472-422.112-9.216-120.32-108.256-305.952-105.856-422.144 9.216-119.712 118.528-119.712 310.688 0 429.28 34.208 33.888 353.696 350.112 353.696 350.112 37.856 37.504 99.072 37.504 136.896 0 0 0 349.824-346.304 353.696-350.112 119.744-118.592 119.744-310.752-0.032-429.28zM888.576 552.576l-353.696 350.112c-12.576 12.512-33.088 12.512-45.6 0l-353.696-350.112c-94.4-93.44-94.4-245.472 0-338.912 91.008-90.080 237.312-93.248 333.088-7.104l43.392 39.040 43.36-39.040c95.808-86.144 242.112-83.008 333.12 7.104 94.4 93.408 94.4 245.44 0.032 338.912zM296.096 240.032c8.864 0 16 7.168 16 16s-7.168 16-16 16h-0.032c-57.408 0-103.968 46.56-103.968 103.968v0.032c0 8.832-7.168 16-16 16s-16-7.168-16-16v0c0-75.072 60.832-135.904 135.872-135.968 0.064 0 0.064-0.032 0.128-0.032z">
		</path>
	</symbol>
</svg>
<ng-svg-icon name="'#icon-heart'"></ng-svg-icon>
```

CSS Styling
```html
<ng-svg-icon class="icon" name="'icon-home'"></ng-svg-icon>
```

```css
.icon{
	width: 16px;
	height: 16px;
	fill: #ff0000;
}
```