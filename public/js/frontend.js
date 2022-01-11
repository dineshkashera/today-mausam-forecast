console.log("loaded frontend js");
$(document).ready(function (e){
    $('form#forecast button').click(function(e){
        e.preventDefault();
        jQuery('.loader').removeClass('hide');
        jQuery('.loader').addClass('show');
       const getLocation =  jQuery('form#forecast input').val();

           fetch('/weather?address='+getLocation).then((response) => {
               response.json().then((data) => {
                   if(data.error){
                       console.log('Invalid request');
                   }else {
                       var msg = '';
                       msg += '<span><strong>Enter Address:</strong> '+getLocation+'</span>';
                       msg += '<span><strong>Location Search:</strong> '+data.location+'</span>';
                       msg += '<span><strong>Forecast:</strong> '+data.forecast+'</span>';
                       jQuery('#message').html(msg);
                       jQuery('.loader').removeClass('show');
                       jQuery('.loader').addClass('hide');
                   }
               });
           });

    });
});