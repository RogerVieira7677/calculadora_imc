const form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value')
    let description = '';

    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    }else if (bmi >= 18.5 && bmi <= 25){
        description = 'Você está no peso ideial!'
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado! Existe um possível sobrepeso!'
    }else if (bmi > 30 && bmi <= 34,9){
        description = 'Cuidado! Você está com obesidade grau '
    }else if (bmi > 35 && bmi <= 39,9){
        description = 'Cuidado! Você está com obesidade grau 2'
    }else{
        description = 'Cuidado! Você está com obesidade morbida!'
    }


    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;

});