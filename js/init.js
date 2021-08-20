(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();      
      $('.materialboxed').materialbox();      
      $('.tabs').tabs();
      $('.tabs').tabs({ 'swipeable': true });
    }); // end of document ready
  })(jQuery); // end of jQuery name space

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'right'});
  });