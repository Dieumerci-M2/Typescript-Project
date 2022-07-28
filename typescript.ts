const input1 = document.querySelector('#input1')! as HTMLInputElement;
const input2 = document.querySelector('#input2')! as HTMLInputElement;
const btn = document.querySelector('button')

const resultat = (number1 : number,number2 : number)=>{
  
    return number1 + number2; 
}

btn?.addEventListener('click', ()=>{
    console.log(resultat(+input1.value, +input2.value))
})