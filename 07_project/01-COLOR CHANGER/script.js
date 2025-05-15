// const myButton = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// myButton.forEach(function(button){
// button.addEventListener('click',function(e){
// if(e.target.id === 'grey'){
//  body.style.backgroundColor = e.target.id;
// }
// })
// })


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        const color = e.target.id;
        const validColors = ['grey', 'white', 'blue', 'red'];
        if (validColors.includes(color)) {
            body.style.backgroundColor = color;
        }
    });
});
