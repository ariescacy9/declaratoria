function accionParaSi(){
  swal.fire('ahora ya somos novios', 'mi bebita fiu fiu jaja', 'success');
};

// esto es para el btn si y saca las alertas 3 formas

//function accionParaSi(){
//  alert('ahora ya somos novios, mi bebita fiu fiu jaja');
//}

//const btnSi = document.querySelector('#Si');
//btnSi.addEventListener('click', function(){
//    swal.fire('ahora ya somos novios', 'mi bebita fiu fiu jaja', 'success');
//});

function mueveElBtn(){
  width = window.innerWidth;
  height = window.innerHeight;

  newAncho = (Math.random()*width);
  newAltura = (Math.random()*height);

  document.getElementById('No').style.position ="fixed";
  document.getElementById('No').style.left = newAncho + "px";
  document.getElementById('No').style.top = newAltura + "px";
}