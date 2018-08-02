/**
 * Reviews
 *
 * Show ramdom selections from an object in which we store Google Reviews
 *
 */


(function ($) {
    $(document).ready(function ($) {
		$("#google-reviews").googlePlaces({
			placeId: 'ChIJHTXdzU2_kIgR--XWqHbgR8g'
		  , render: ['reviews']
		  , min_rating: 3
		  , max_rows: 6
		  , schema: {
					displayElement: '#schema' // optional, will use "#schema" by default
				  , beforeText: 'Googlers rated'
				  , middleText: 'based on'
				  , afterText: 'awesome reviewers.'
				  , type: 'Locksmith'
			  }
		  , address:{
			displayElement: "#custom-address-id" // optional, will use "#google-address" by default
		  }
		  , phone:{
			displayElement: "#custom-phone-id" // optional, will use "#google-phone" by default
		  }
		  , staticMap:{
			  displayElement: "#google-static-map" // optional, will use "#google-static-map" by default
		  }
		  , hours:{
			  displayElement: "#google-hours" // optional, will use "#google-hours" by default
		  }
		});
    }); // End document ready
})(jQuery);