    $(document).ready(function($) {
    	console.clear();
        $(window).scroll(function(event) {
            let pxToTop = $(window).scrollTop();
            
            // if (pxToTop > 120) {
            //     console.log('greater')
            //     $('.navbar-nav li').animate({'padding-top': '2em'}, "slow")
            // } else if (pxToTop <= 120) {
            //     console.log('lesser')
            //     $('.navbar-nav li').animate({'padding-top': '5.5em'}, "slow")
            // }
            if (pxToTop > 120) {
                $('.navbar-nav li').css('padding-top', '2em')
            }
            if (pxToTop < 120) {
                console.log(pxToTop);
                $('.navbar-nav li').css('padding-top', '5.5em')
            }
        });
        $("#carousel-example-generic").carousel();

        $( ".right.carousel-control" ).click(function() {
        	//console.log('clicked');
        })
    });
