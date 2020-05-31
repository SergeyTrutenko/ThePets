$(document).ready(function () {

    $(".menu_link").click(function () {
        $('.menu_link .hamburger').toggleClass("active");
        $('.main-menu').toggleClass("active");
        return false;
    });

    $(".search_link").click(function () {
        $('.menu_link .hamburger').toggleClass("active");
        $('.main-menu').toggleClass("active");
        setTimeout(function () {
            $('.main-menu .form-group .input-wrapper input').focus();
        }, 100)
        return false;
    });

    $('.main-menu .form-group .input-wrapper input').focus(function () {
        $('.main-menu__items').addClass("opacity");
        $('.main-menu .row-info').addClass("opacity");
    });

    $('.main-menu .form-group .input-wrapper input').blur(function () {
        $('.main-menu__items').removeClass("opacity");
        $('.main-menu .row-info').removeClass("opacity");
    });

    $('.experts__items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/experts-prev.png" alt="" /></button>',
        nextArrow: '<button class="next"><img src="img/experts-next.png" alt="" /></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]
    });

    $('.dog-breed__items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/experts-prev.png" alt="" /></button>',
        nextArrow: '<button class="next"><img src="img/experts-next.png" alt="" /></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.mobile-slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/experts-prev.png" alt="" /></button>',
        nextArrow: '<button class="next"><img src="img/experts-next.png" alt="" /></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]
    });

    $('.calendar-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/experts-prev.png" alt="" /></button>',
        nextArrow: '<button class="next"><img src="img/experts-next.png" alt="" /></button>',
        fade: true
    });

    $('.purchase').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/experts-prev.png" alt="" /></button>',
        nextArrow: '<button class="next"><img src="img/experts-next.png" alt="" /></button>'
    });

    $('.js-select').styler();

    $('.js-select2').select2();

    $('.input-wrapper input, .input-wrapper textarea').change(function () {
        if ($(this).val().length >= 1) {
            $(this).next('p').addClass('input-fill');
        } else {
            $(this).next('p').removeClass('input-fill');
        }
    });

    // anchors
    $(".this-article .paws_list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".to_top").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    if ($(window).width() <= 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 70) {
                $('.this-article').addClass("fixed");
            } else {
                $('.this-article').removeClass("fixed");
            }
        });
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.to_top').addClass('visible');
        } else {
            $('.to_top').removeClass('visible');
        }
    });

    $(".open_btn").click(function () {
        $(this).toggleClass("opened");
        $('.calendar-slider').toggleClass("opened");
        if ($('.calendar-slider').hasClass('opened')) {
            $('.calendar-slider').slick('setPosition');
        }
    });

    $(".advanced_btn").click(function () {
        $(this).toggleClass("opened");
        $('.advanced_block').toggleClass("opened");
    });

    // btn-map
    $(".btn_map").click(function () {
        $(this).hide().removeClass('visible');
        $('.btn_results').show().addClass('visible');
        $('#map').fadeIn();
    });

    $(".btn_results").click(function () {
        $(this).hide().removeClass('visible');
        $('.btn_map').show().addClass('visible');
        $('#map').fadeOut();
    });

    // range-slider
    $(".js-range-slider").ionRangeSlider();

    //info_link
    if ($(window).width() < 576) {
        $(".filter-breeds .info_link").click(function () {
            $(this).toggleClass("opened");
            $(this).next('.info-block').toggleClass("opened");
        });
    } else {
        $(".filter-breeds .info_link").click(function () {
            $(this).toggleClass("opened");
            $(this).children('.info-block').toggleClass("opened");
        });
    }

    //less_filters
    $(".less_filters").click(function () {
        $(this).toggleClass('opened');
        $('.advanced__filter').toggleClass("opened");
    });

});

// slider-pets
function sliderWorks(element) {
    element.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/experts-prev.png" alt="" /></button>',
        nextArrow: '<button class="next"><img src="img/experts-next.png" alt="" /></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]
    });
}

// slider-sidebar
function sliderSidebar(element) {
    element.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true
    });
}

function sliderAdvantages(element) {
    element.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
}

$(document).ready(function () {

    if ($(window).width() >= 768) {
        if (!$(".pets__items").hasClass('slick-initialized')) {
            sliderWorks($('.pets__items'));
        }
        if ($(".other-pets__items").hasClass('slick-initialized')) {
            $(".other-pets__items").slick("unslick");
        }
    } else {
        if ($(".pets__items").hasClass('slick-initialized')) {
            $(".pets__items").slick("unslick");
        }
        if (!$(".other-pets__items").hasClass('slick-initialized')) {
            sliderWorks($('.other-pets__items'));
        }
    }

    if ($(window).width() <= 991) {
        if (!$(".this-article .paws_list").hasClass('slick-initialized')) {
            sliderSidebar($('.this-article .paws_list'));
        }
    } else {
        if ($(".this-article .paws_list").hasClass('slick-initialized')) {
            $(".this-article .paws_list").slick("unslick");
        }
    }

    //sliderAdvantages
    if ($(window).width() <= 767) {
        if (!$(".advantages__items").hasClass('slick-initialized')) {
            sliderAdvantages($('.advantages__items'));
        }
    } else {
        if ($(".advantages__items").hasClass('slick-initialized')) {
            $(".advantages__items").slick("unslick");
        }
    }

    if ($(window).width() <= 768 ) {
        $('.compare__content').hide();
        $('.compare__content:first').show();
        $('.compare__nav p:first').addClass('selected');

        $('.compare__nav p').click(function (event) {
            $('.compare__nav p').removeClass('selected');
            $(this).addClass('selected');
            $('.compare__content').hide();
            var selectTab = $(this).attr("id");
            $(selectTab).show();
        });
    }else {
        $('.compare__content').show();
        $('.compare__nav p').removeClass('selected');
        $('.compare__nav p').unbind();
    }

    //follow
    if ($(window).width() < 576) {
        $(".breeds-results .follow").click(function () {
            $(this).toggleClass("opened");
        });
    } else {
        $(".breeds-results .follow").unbind();
    }

});

$(window).resize(function () {

    if ($(window).width() >= 768) {
        if (!$(".pets__items").hasClass('slick-initialized')) {
            sliderWorks($('.pets__items'));
        }
        if ($(".other-pets__items").hasClass('slick-initialized')) {
            $(".other-pets__items").slick("unslick");
        }
    } else {
        if ($(".pets__items").hasClass('slick-initialized')) {
            $(".pets__items").slick("unslick");
        }
        if (!$(".other-pets__items").hasClass('slick-initialized')) {
            sliderWorks($('.other-pets__items'));
        }
    }

    if ($(window).width() <= 991) {
        if (!$(".this-article .paws_list").hasClass('slick-initialized')) {
            sliderSidebar($('.this-article .paws_list'));
        }
    } else {
        if ($(".this-article .paws_list").hasClass('slick-initialized')) {
            $(".this-article .paws_list").slick("unslick");
        }
    }

    //sliderAdvantages
    if ($(window).width() <= 767) {
        if (!$(".advantages__items").hasClass('slick-initialized')) {
            sliderAdvantages($('.advantages__items'));
        }
    } else {
        if ($(".advantages__items").hasClass('slick-initialized')) {
            $(".advantages__items").slick("unslick");
        }
    }

    if ($(window).width() <= 768 ) {
        $('.compare__content').hide();
        $('.compare__content:first').show();
        $('.compare__nav p:first').addClass('selected');

        $('.compare__nav p').click(function (event) {
            $('.compare__nav p').removeClass('selected');
            $(this).addClass('selected');
            $('.compare__content').hide();
            var selectTab = $(this).attr("id");
            $(selectTab).show();
        });
    }else {
        $('.compare__content').show();
        $('.compare__nav p').removeClass('selected');
        $('.compare__nav p').unbind();
    }

    if ($(window).width() <= 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 70) {
                $('.this-article').addClass("fixed");
            } else {
                $('.this-article').removeClass("fixed");
            }
        });
    }

    //follow
    if ($(window).width() < 576) {
        $(".breeds-results .follow").click(function () {
            $(this).toggleClass("opened");
        });
    } else {
        $(".breeds-results .follow").unbind();
    }



    if ($(window).width() < 576) {
        $(".filter-breeds .info_link").click(function () {
            $(this).toggleClass("opened");
            $(this).next('.info-block').toggleClass("opened");
        });
    } else {
        $(".filter-breeds .info_link").click(function () {
            $(this).toggleClass("opened");
            $(this).children('.info-block').toggleClass("opened");
        });
    }

});


$("body").on("click", ".alphabet *[data-anchor]", function(event) {
    var id = $(this).data('anchor'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top - 50
    }, 1500);
    event.preventDefault();
});

// Cache selectors
var topMenu = $(".alphabet"),
    topMenuHeight = topMenu.outerHeight() + 15,
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

$(window).scroll(function() {
// Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

// Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
// Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
// Set/remove active class
    menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");

});