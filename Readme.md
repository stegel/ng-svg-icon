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
<svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
		<symbol id="icon-min-01" viewBox="0 0 1024 1024">
			<title>min-01</title>
			<path class="path1 fill-color1" d="M375.68 460.167h45.44v-133.76h-37.44v-23.040c10.24-1.92 19.040-4.213 26.4-6.88s14.24-5.92 20.64-9.76h27.52v173.44h40v30.080h-122.56v-30.080zM598.080 494.087c-21.333 0-38.187-9.12-50.56-27.36s-18.56-44.64-18.56-79.2c0-34.56 6.187-60.64 18.56-78.24s29.227-26.4 50.56-26.4c21.333 0 38.187 8.853 50.56 26.56s18.56 43.733 18.56 78.080c0 34.56-6.187 60.96-18.56 79.2s-29.227 27.36-50.56 27.36v0zM598.080 465.287c4.907 0 9.44-1.333 13.6-4s7.733-7.093 10.72-13.28c2.987-6.187 5.333-14.187 7.040-24s2.56-21.973 2.56-36.48c0-14.293-0.853-26.293-2.56-36s-4.053-17.547-7.040-23.52c-2.987-5.973-6.56-10.187-10.72-12.64s-8.693-3.68-13.6-3.68c-4.907 0-9.44 1.227-13.6 3.68s-7.733 6.667-10.72 12.64c-2.987 5.973-5.333 13.813-7.040 23.52s-2.56 21.707-2.56 36c0 14.507 0.853 26.667 2.56 36.48s4.053 17.813 7.040 24c2.987 6.187 6.56 10.613 10.72 13.28s8.693 4 13.6 4v0z"></path>
			<path class="path2 fill-color1" d="M367.952 615.032h24.576l22.656 61.824 8.256 23.808h0.768l8.064-23.808 22.272-61.824h24.576v125.568h-20.928v-57.408c0-2.944 0.096-6.144 0.288-9.6s0.416-6.944 0.672-10.464c0.256-3.52 0.576-6.976 0.96-10.368s0.704-6.56 0.96-9.504h-0.768l-10.176 28.608-21.696 57.024h-10.368l-21.696-57.024-9.984-28.608h-0.768c0.256 2.944 0.544 6.112 0.864 9.504s0.64 6.848 0.96 10.368c0.32 3.52 0.576 7.008 0.768 10.464s0.288 6.656 0.288 9.6v57.408h-20.544v-125.568zM510.992 615.032h22.272v125.568h-22.272v-125.568zM565.136 615.032h22.848l39.168 70.656 12.864 26.688h0.768c-0.512-6.528-1.12-13.536-1.824-21.024s-1.056-14.752-1.056-21.792v-54.528h21.312v125.568h-22.848l-39.168-70.656-12.864-26.688h-0.768c0.512 6.656 1.12 13.632 1.824 20.928s1.056 14.464 1.056 21.504v54.912h-21.312v-125.568z"></path>
		</symbol>
		<!-- rest of icons -->
	</defs>
</svg>
<ng-svg-icon name="'icon-home'"></ng-svg-icon>
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