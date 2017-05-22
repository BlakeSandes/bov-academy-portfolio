var navItems = document.querySelectorAll('.nav__item');

// var mainSections = document.querySelectorAll()

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function(e) {
    e.preventDefault();
    // Remove the selected class from any other siblings.
    for (var i = 0; i <  navItems.length; i++) {
      if (navItems[i] !== this) {
        navItems[i].classList.remove('selected');
      }
    }
    // Created selected toggle-slide affect.
    this.classList.add('selected');
  }, false);
}

 // Total shameless copy and paste from: http://stackoverflow.com/questions/10063380/javascript-smooth-scroll-without-the-use-of-jquery/19808153#1980815
 // I will come back to this and do it myself when I have more skills!
(function() {
  var speed = 500;
  var moving_frequency = 15; // Affects performance !
  var links = document.querySelectorAll('.js-nav__link');
  var href;
  for(var i=0; i<links.length; i++) {   
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#') {
      links[i].onclick = function(e) {
        var element;
        var href = this.attributes.href.nodeValue.toString();
        if(element = document.getElementById(href.substr(1))) {
          var hop_count = speed/moving_frequency
          var getScrollTopDocumentAtBegin = getScrollTopDocument();
          var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

          for(var i = 1; i <= hop_count; i++) {
            (function() {
              var hop_top_position = gap*i;
              setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin - 172); }, moving_frequency*i);
            })();
          }
        }

        return false;
      };
    }
  }

  var getScrollTopElement =  function (e) {
    var top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null) {
      top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
      e = e.offsetParent;
    }

    return top;
  };

  var getScrollTopDocument = function() {
    return document.documentElement.scrollTop + document.body.scrollTop;
  };
})();