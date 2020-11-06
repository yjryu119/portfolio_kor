
$(function(){
    $(".ham").click(function(){
        $("nav").show();
        $( "nav" ).animate( {
            left: '0'
        });
    });
             
    $(".close").click(function(){
         $( "nav" ).animate( {
            left: '-100%'
        });
    });
});
