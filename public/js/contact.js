(function(){
    $('#btn-contact-submit').click(function(event){
        if(event)
            event.preventDefault()

        const visitor = {
            name: $('#contact-form-name').val(),
            email: $('#contact-form-email').val(),
            message: $('#contact-form-message').val()
        }
        console.log('CONTACT FORM SUBMTTED! '+JSON.stringify(visitor));

        $.ajax({
            url: '/api/subscriber',
            type: 'POST',
            data: visitor,
            success: function(response){
                console.log('SUBSCRIBER CREATED '+ JSON.stringify(response));
            },
            error: function(response){
                
            }
        })
    })
})()


