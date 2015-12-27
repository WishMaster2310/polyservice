$(document).ready(function() {

	// init mosaiflow
	// docs here --> [https://github.com/sapegin/jquery.mosaicflow/blob/master/Readme.md]
	$('.works').mosaicflow({
	    itemSelector: '.works__item',
	    minItemWidth: 300,
	    columnClass: 'works__col'
	});

	// init wow scroll animations
	new WOW().init();

    $('.header__burger').on('click', function() {
        if($('.header-navline').css('display') === 'none') {
            $('.header-navline').slideDown(300);
            $(this).addClass('header__burger--active')
        } else {
           $('.header-navline').slideUp(300); 
           $(this).removeClass('header__burger--active')
        }
        
    });

    $(window)
        .on('resize', function() {
            if($(window).width() > 768) {
               $('.header-navline').attr('style', '');
               $('.header__burger').removeClass('header__burger--active');
            }
        })
        .on('scroll', function (e) {
            if($(window).scrollTop() > 400) {
                $('.header').addClass('header--sticky');
                $('.header__placeholder').css({
                    height: $('.header').outerHeight(),
                    display: 'block'
                });
            } else {
                $('.header').removeClass('header--sticky');
                $('.header__placeholder').css({
                    display: 'none'
                });
            }
        });


    $('.header-menu__link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html body').animate({
            scrollTop: $(target).offset().top - 120
        }, 450)
    });

    $('body').scrollspy({ target: '#navigation', offset: 350 })
});


var yaMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("contacts", {
            center: [55.8, 37.8],
            zoom: 14
        }),

        
        // Создаем метку с помощью вспомогательного класса.
        myPlacemark = new ymaps.Placemark([55.8, 37.8], {}, {
            preset: 'twirl#violetIcon'
        })

    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark)
}