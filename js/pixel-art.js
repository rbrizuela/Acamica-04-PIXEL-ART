var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    indicadorColor.style.backgroundColor = colorActual

  })
);


//variables globales del modulo
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorColor = document.getElementById('indicador-de-color');
var descripcionColor = document.getElementById('indicador-de-color-mensaje');
var mouseApretado = false;

//declaración de eventos
paleta.addEventListener("click",setearColor);
grillaPixeles.addEventListener("click",pintarColor);
grillaPixeles.addEventListener("mousedown",mouseApretar);
grillaPixeles.addEventListener("mouseup",mouseSoltar);
grillaPixeles.addEventListener("mouseover",pintarMouseOver);

//funciones
function setearColor(e) {

    indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
    descripcionColor.textContent = 'pincel: ' + e.target.style.backgroundColor;

}

function pintarColor(e) {

    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;

}

function mouseApretar(e) {

  mouseApretado = true;

}

function mouseSoltar(e) {

  mouseApretado = false;

}

function pintarMouseOver(e) {

  if (mouseApretado) {
      e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
    }

}

function generarPaletaColores () {

  for (var i = 0; i < nombreColores.length ; i++) {

    var elemDiv = document.createElement('div');

    elemDiv.style.backgroundColor = nombreColores[i];
    elemDiv.className = 'color-paleta';

    paleta.appendChild(elemDiv);

  }

}

function generarGrillaPixel () {

  for (var i = 0; i < 1750 ; i++) {

    var elemDiv = document.createElement('div');
    elemDiv.id = "div" + i;
    grillaPixeles.appendChild(elemDiv);

  }

}

$(document).ready(function(){

  $("#borrar").click(function(){

    for (var i = 0; i < 1750 ; i++) {
      var elemDiv = document.getElementById('div'+ i);
      $(elemDiv).animate({"backgroundColor": "white"}, 1000);
    }
    
  });

});

$(document).ready(function(){
  $("#batman").click(function(){
    cargarSuperheroe(batman);
  });
});

$(document).ready(function(){
  $("#wonder").click(function(){
    cargarSuperheroe(wonder);
  });
});

$(document).ready(function(){
  $("#flash").click(function(){
    cargarSuperheroe(flash);
  });
});

$(document).ready(function(){
  $("#invisible").click(function(){
    cargarSuperheroe(invisible);
  });
});

$(document).ready(function(){
  $("#guardar").click(function(){
    guardarPixelArt();
  });
});

generarPaletaColores();
generarGrillaPixel();
