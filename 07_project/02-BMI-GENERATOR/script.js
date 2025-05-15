const form = document.querySelector('form');
//this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === ''|| height<0 || isNaN(height) ){
        results.innerHTML = `please give a valid height ${height}`;

    }

     else if(weight === ''|| weight<0 || isNaN(weight) ){
        results.innerHTML = `please give a valid height ${weight}`;
        
    }else{
      const bmi =  (weight/((height*height)/10000)).toFixed(2);

      // show the result
      
    if(bmi<18.6){
        results.innerHTML = `<span> Your Bmi Is : ${bmi} Bmi Weight Guide :under weight</span>`
    }

    else if(bmi<25){
        results.innerHTML = `<span> Your Bmi Is : ${bmi} Bmi Weight Guide :normal weight</span>`
    }

     else if(bmi<30){
        results.innerHTML = `<span> Your Bmi Is : ${bmi} Bmi Weight Guide : over weight</span>`
    }

    }


   


})


