$(function() {
    
    let lh;
    let sum = 0;

    let navWidth = $('.js-nav').width();

    $('.js-nav ul>li').each(function () {
        lh = $(this).height();
        if ($(this).children('ul').length) {
            $(this).append(`<i class="fas fa-arrow-down js-dropdown" style="line-height: ${lh}px"></i>`);
        }
    });

    $(window).on('resize', function () {
        calcSum();
        navWidth = $('.js-nav').width();
        MoveToMore();
        MoveFromMore();
    });

    function calcSum() {
        sum = 0;
        $('.js-nav>ul>li').each(function () {
            sum += $(this).outerWidth();
        });
    }

    function MoveToMore() {
        if (navWidth < sum) {
            calcSum();
            if (!$('.js-more').length) {
                $('.js-nav .nav__list').append(`
                    <li class="nav__item">
                        <a class="nav__link" href="javascript:void(0)">
                            MORE
                        </a>
                        <i class="fas fa-arrow-down js-dropdown" style="line-height: ${lh}px"></i>
                        <ul class="js-more"></ul>
                    </li>
                `);
            }
            $('.js-more').append($('.js-nav>ul>li:nth-last-child(2)'));
            navWidth = $('.js-nav').width();
            if (sum + $('.js-nav>ul>li:nth-last-child(2)').width() > navWidth) {
                MoveToMore();
            }
        }
    }

    function MoveFromMore() {
        calcSum();
        if (sum + $('.js-more>li:first-child').width() < navWidth) {
            $('.js-more>li:last-child').insertBefore($('.js-nav>ul>li:last-child'));
        }
        calcSum();
    }

    calcSum();
    MoveToMore();

    
});