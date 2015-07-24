document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  
  checkPageButton.addEventListener('click', function() {
    
    chrome.tabs.query({active: true}, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';

      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab[0].url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });

  }, false);
}, false);