// Variables
item1 = document.querySelector('.item-1');
item1Value = document.querySelector('.item-1');

// Event listeners
item1.addEventListener('mouseover', customMessage);
item1.addEventListener('mouseout', helloWorld);

//Functions
function customMessage(){
    item1Value.innerHTML = '<h1>Hey!</h1>'
    console.log('hello');
}
function helloWorld(){
    item1Value.innerHTML = '<h1>Hello World!</h1>'
    console.log('world');
}
