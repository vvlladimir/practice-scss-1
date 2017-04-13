//image gallery script
document.querySelector('.wrapper-gallery').addEventListener('mouseover', function(e){
  //console.log(e.target);
  if(e.target.tagName === 'IMG'){
    var myElement = document.createElement('div');
    myElement.className = 'preview';
    e.target.parentNode.appendChild(myElement);

    var myImg = document.createElement('img');
    var imgLoc = e.target.src;
    myImg.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';
    console.log(myImg.src);
    myElement.appendChild(myImg);

    e.target.addEventListener('mouseout', function handler(d){
      var myNode = d.target.parentNode.querySelector('div.preview');
      myNode.parentNode.removeChild(myNode);
      e.target.removeEventListener('mouseout', handler, false);
    }, false);

  }// check to see that I am clicked on IMG only
}, false);// click event
