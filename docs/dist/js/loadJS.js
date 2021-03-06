/*!
 * pawsnewengland v6.19.0: WordPress theme for PAWS New England
 * (c) 2016 Chris Ferdinandi
 * MIT License
 * https://github.com/pawsnewengland/pawsne
 * Open Source Credits: https://github.com/ftlabs/fastclick, https://github.com/toddmotto/fluidvids, http://photoswipe.com, http://masonry.desandro.com, http://imagesloaded.desandro.com
 */

/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
function loadJS( src, cb ){
	'use strict';
	var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
	var script = window.document.createElement( 'script' );
	script.src = src;
	script.async = true;
	ref.parentNode.insertBefore( script, ref );
	if ( cb && typeof(cb) === 'function' ) {
		script.onload = cb;
	}
	return script;
}