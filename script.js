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
                            $('<span>' + nb + ' abonnés' + '</span>').appendTo('#subscriberCount');
                          });
              },
            error: function() {
              $.ajax({
                url : "http://alanovhnku.cluster014.ovh.net/youtubeapi.php",
                dataType:"jsonp",
                jsonp:"apicallback",
                success:function(data)
                {
                  $('<span>' + data.subscribers + ' abonnés' + '</span>').appendTo('#subscriberCount');
                },
                error: function() {
                  $('<span>' + "Erreur, Impossible de contacter L'API Youtube" + '</span>').appendTo('#subscriberCount');
                }
              });
            }
        });
  }
);
