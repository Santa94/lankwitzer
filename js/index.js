 var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }