$(document)
  .ready(function() {

    $('.masthead .information')
      .transition('scale in')
    ;


  })

$(document).ready(  
 function()
 {
   $.ajax( {
            type: "GET",
            url: "https://gdata.youtube.com/feeds/api/users/alan736",
            dataType: "xml",
            success: function(xml) 
                     {
                       $(xml).find('entry').each(   
                         function()
                         {
                            var nb = $(this).find('yt\\:statistics').attr('subscriberCount');
                            $('<span>' + nb + '</span>').appendTo('#subscriberCount');
                          });
                      }
        });
  }
);