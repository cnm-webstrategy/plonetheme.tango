    $(document).ready(function($) {
    	console.clear();
        $(window).scroll(function(event) {
            var pxToTop = $(window).scrollTop();

            // if (pxToTop > 120) {
            //     console.log('greater')
            //     $('.navbar-nav li').animate({'padding-top': '2em'}, "slow")
            // } else if (pxToTop <= 120) {
            //     console.log('lesser')
            //     $('.navbar-nav li').animate({'padding-top': '5.5em'}, "slow")
            // }
            if (pxToTop > 120) {
                //$('.navbar-nav li').css('padding-top', '2em')
            }
            if (pxToTop < 120) {
                // $('.navbar-nav li').css('padding-top', '5.5em')
            }
        });
        $("#carousel-example-generic").carousel();

        $( ".right.carousel-control" ).click(function() {
        	//console.log('clicked');
        })

        // don't display text in icon span tags
        $('.counter-type-1 .icon').empty();



        // generic counter
        ( function counters() {

            var sayHello = function(x){
                console.log(x);
            }

            var array = [];

            array.forEach.call(document.getElementsByClassName("counter"), function(el){

                    var _from = parseInt(el.dataset.from);
                    var _to = parseInt(el.dataset.to);
                    if (el.dataset.speed) var _speed = parseInt(el.dataset.speed);
                    var currentVal = el.textContent = _from;

                    var loop = setInterval(function(){
                        console.log(currentVal);
                        el.innerHTML = currentVal++;
                        if (currentVal >= _to) {
                            clearInterval(loop);
                            el.innerHTML = _to;
                        }
                    }, _speed / 1000);




             })
         })();
    });
