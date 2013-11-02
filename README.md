marquee
=======

easy way to add scrolling text functionality to any hidden overflow content

feedback appreciated!

includes:
	marquee.css
	marquee.html
	marquee.js
	readme.md
	license

marquee.html

	this is an example page to show how it works.

	simply wrap the text you wish to scroll with a class=“marquee”

	make sure it has a parent element with class=“marqueeContainer”

	that’s it!

	there is a ‘marqueeWrapper’ class that you may need to use. this is a little hack. without it the <span class=“marquee”> will ignore the padding of it’s parent. if you have padding on the parent, just wrap the content in one extra <div> with that class.

marquee.css

	feel free to mess with the transition settings, to change the timing on the scrolling. otherwise most other settings should be left alone.

marquee.js

	as long as you use the class names ‘marquee’ and ‘marqueeContainer’, you won’t have to change anything in this file.

	you can change the ‘buffer’ which is how much extra space it will scroll after it reaches the end of your content.

