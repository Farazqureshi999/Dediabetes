import $ from 'jquery';


$(document).ready(function(){
    $( ".btn12" ).click(function() {
        $(this).toggleClass("open");
        $(".mobile-header-menu").toggleClass("open-menu");
      });
})