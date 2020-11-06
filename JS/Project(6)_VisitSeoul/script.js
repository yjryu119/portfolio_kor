$(function(){   

   $("nav>ul").mouseenter(function() {
      $(".sub_menu").stop().fadeIn();
      })
      .mouseleave(function() {
         $(".sub_menu").fadeOut();
   });

   $(".ham_menu").click(function(){
      $(".mm").show();
      $(".mm" ).animate( {
          left: '0'
      });
  });
           
  $(".close").click(function(){
       $( ".mm" ).animate( {
          left: '-100%'
      });
  });

   $(".slide_list").children("div:gt(0)").hide(2000);
   let current = 0;

   setInterval(function(){
               let next = (current +1) % 3;
               $(".slide_list").children("div").eq(current).fadeOut(200);
               $(".slide_list").children("div").eq(next).fadeIn(1000);
               current = next;   
   },3000);
   
});