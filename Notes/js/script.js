$(function() {
    
    $('.js-clearLocalstorage').on('click', function () {
        localStorage.removeItem('message');
        window.location.reload();
    })

    const textarea = $('.js-textarea'),
        submit = $('.js-submit'),
        container = $('.js-container');

    let data,
        messages = [];

    if (localStorage.getItem('message')) {
        data = localStorage.getItem('message');
        messages = JSON.parse(data);
    }
    
    for (const iterator of messages) {
        $(container).append(`
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <p class="card-text">${iterator}</p>
                </div>
            </div>
        </div>
        `)
    };

    var $grid = $(container).masonry();

    $(submit).on('click', function () {

        let message = $(textarea).val();
        $(textarea).val('');

        if (message) {

            messages.unshift(message);
            
            data = JSON.stringify(messages);
            localStorage.setItem('message', data);
    
            let $item = $(`
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">${message}</p>
                        </div>
                    </div>
                </div>
                `);
            $grid.prepend( $item ).masonry( 'prepended', $item );
            
        }


        event.preventDefault();
    });

});