console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById ('main-text');

element.innerHTML = 'New Value for Saravana';

//move the image 
var img = document.getElementById('madi')
img.onclick = function(){
    var interval = setinterval(moveLeft, 100);
};
