//javascript file

document.getElementById('dugme').addEventListener('click', function(e){
  e.toElement.innerText = "Vlada";
  console.log(e.toElement.innerText);
}, false);



var fotka = document.querySelectorAll('.wrapper > img');

var boja = ['yellow', 'lightyellow', 'greenyellow' , 'magenta', 'darkblue', 'lightblue', 'blue', 'green', 'purple', 'black', 'grey'];

for (var i = 0; i < fotka.length; i++) {

  fotka[i].style.backgroundColor = boja[i];

}




document.querySelector('.wrapper').addEventListener('click', function(a){
var bgColor = a.toElement.style.backgroundColor;
//console.log(a.toElement.style.backgroundColor);

  var removeTarget = a.target;
  //console.dir(a.target);
//console.dir(removeTarget);
if(removeTarget.tagName === 'IMG'){

  removeTarget.parentNode.removeChild(removeTarget);

  var boxPoruka = document.createElement('div');
  boxPoruka.className += 'box-poruka';

  var textPoruka = document.createTextNode('Hvala vam sto ste obrisali '+ bgColor +' kockicu!');
  boxPoruka.appendChild(textPoruka);
}else {
  console.log(a.target);
  var boxPoruka = document.createElement('div');
  boxPoruka.className += 'box-poruka-nista';

  var textPoruka = document.createTextNode('Niste obrisali kockicu!');
  boxPoruka.appendChild(textPoruka);
}

document.getElementById('body').appendChild(boxPoruka);

}, false);
