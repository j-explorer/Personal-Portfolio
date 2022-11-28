//Changing image size when mouseover (not working)

/*const expandImage = document.getElementsByClassName('website_image');

for(let i=0; i<expandImage.length; i++) {

expandImage[i].addEventListener('mouseover', expand);

function expand(event){
  this.style.height= '248px';
  this.style.weight= '315px';
}
}


const contractImage = document.getElementsByClassName('website_image');

for(let i=0; i<contractImage.length; i++) {

contractImage[i].addEventListener('mouseout', contract);

function contract(event){
  this.style.height= '';
  this.style.weight= '';
}
}
*/


/*first attempt at changing certificate button color. Did not achieve results I wanted.


const backgroundColorWhite = document.getElementById('certificates');
backgroundColorBlack.addEventListener('mouseover', backgroundBlack)

function backgroundWhite(event){
  backgroundColorWhite.style.backgroundColor= 'White';
}

const backgroundColorBlack = document.getElementById('certificates');
backgroundColorBlack.addEventListener('mouseout', backgroundBlack)

function backgroundBlack(event){
  backgroundColorBlack.style.backgroundColor= '';
}

const textColorBlack = document.getElementById('certificates_title');
textColorBlack.addEventListener('mouseover', textBlack)

function textBlack(event){
  textColorBlack.style.color= 'black';
}

const textColorWhite = document.getElementById('certificates_title');
textColorWhite.addEventListener('mouseout', textWhite)

function textWhite(event){
  textColorWhite.style.color= '';
}*/


//Certificate button to change color on mouseover/out. achieved wanted results.

const changeColor = document.getElementById('certificates');

changeColor.addEventListener('mouseover', newColor)

function newColor(event){
  if(event){
  document.getElementById('certificates').style.backgroundColor= 'white';
  document.getElementById('certificates_title').style.color = 'black';
  } 
}

const originalColor = document.getElementById('certificates');

originalColor.addEventListener('mouseout', color)

function color(event){
  if(event){
  document.getElementById('certificates').style.backgroundColor= '';
  document.getElementById('certificates_title').style.color = '';
  } 
}