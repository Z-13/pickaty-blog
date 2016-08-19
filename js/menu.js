( function( window, $, undefined ) {
'use strict';
 
 // Add toggles to menus
$( 'nav' ).before( '<button class="menutoggle" role="button" aria-pressed="false"></button>' ); 

// Add toggles to sub menus
$( 'nav .sub-menu' ).before( '<button class="submenutoggle" role="button" aria-pressed="false"></button>' ); 
 
// Show or hide the navigation
$( '.menutoggle, .submenutoggle' ).on( 'click', function() {
	var $this = $( this );
	$this.attr( 'aria-pressed', function( index, value ) {
		return 'false' === value ? 'true' : 'false';
		}
	);
 
	$this.toggleClass( 'activated' );
	$this.next( 'nav, .sub-menu' ).slideToggle( 'fast' );
 
	}
);
 
})( this, jQuery );
