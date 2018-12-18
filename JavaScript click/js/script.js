$(function() {
    
    // const управляющий = $('селектору'),
    // управляемый = $('селектору');

    // $(управляющий).on('событие', function () {
    //    $(управляемый).что_то_делаем(); 
    // });
    
    const button = $('.js-button-modal'),
    modal = $('.js-modal');

    $(button).on('click', function () {
        // что делает
        $(modal).toggle();
        // конец что делает
    });


    const input = $('.js-input'),
    error = $('.js-error');

    $(input).on('keyup change keydown', function () {
        
        if (input.val().length <= 3) {
            $(error).show();
        }
        else {
            $(error).hide();
        }

    });



    const to_scroll = $('.js-elem_to_scroll'),
    to_show = $('.js-elem_to_show'),
    checkbox = $('.js-checkbox');

    $(window).on('scroll', function () {

        // position of element in page
        let elem_offset = $(to_scroll).offset().top,
            page_offset = window.pageYOffset;

        if ( (page_offset >= elem_offset - 200) && ($(checkbox).is(':checked'))) {
            $(to_show).show();
        }
        else {
            $(to_show).hide();
        }

    });


    const dragable = $('.js-dragable');
    let flag = false;

    let offsetX,
    offsetY;

    $(dragable).on('mousedown', function () {
        console.log('mousedown');
        flag = true;
        let posX = $(dragable).offset().left,
        posY = $(dragable).offset().top,
        clientX = event.clientX,
        clientY = event.clientY;
        offsetX = clientX - posX,
        offsetY = clientY - posY;
    })
    $(dragable).on('mousemove', function (event) {
        if (flag) {
            let posX = $(this).offset().left,
                posY = $(this).offset().top,
                clientX = event.clientX,
                clientY = event.clientY;
    
            $(this).css('left', clientX - offsetX + 'px');
            $(this).css('top', clientY - offsetY + 'px');
        }
    })
    $(window).on('mouseup', function () {
        console.log('mouseup');
        flag = false;
    })


});