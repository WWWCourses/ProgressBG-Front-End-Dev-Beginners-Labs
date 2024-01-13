# CSS + jQuery Gallery
CSS + jQuery Gallery Slideshow plugin

### See [Demo](https://codepen.io/gaiaayan/pen/vzgwOb) at CodePen

## Implementation
Add within ```<head>...</head>``` tag:
```html
<link href="jquery-gallery.css" type="text/css" rel="stylesheet"/>
```
Add just before ```</body>``` tag:
```html
<script src="https://code.jquery.com/jquery-1.10.2.js"></script><br/>
<script src="jquery-gallery.js" type="text/javascript"></script>
```

Add within initiation code:
```js
$('.gallery-slideshow').slideshow();
```
Note that you can configure the interval time, width and height of the slideshow:
```js
$('.gallery-slideshow').slideshow({
  interval: 2000,
  width: 600,
  height: 400
});
```
