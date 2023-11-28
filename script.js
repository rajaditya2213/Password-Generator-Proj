//Now Functionality

const inputSlider=document.getElementById('inputSlider');
const sliderValue=document.getElementById('sliderValue');
const passBox=document.getElementById('passBox');
const lowercase=document.getElementById('lowercase');
const uppercase=document.getElementById('uppercase');
const numbers=document.getElementById('numbers');
const symbols=document.getElementById('symbols');
const genBtn=document.getElementById('genBtn');
const copyIcon=document.getElementById('copyIcon');

//Showing input Slider Value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('click', ()=>{
     sliderValue.textContent=inputSlider.value;

});

genBtn.addEventListener('click', ()=>{
     passBox.value= generatePassword();
})

let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers="0123456789";
let allSymbols="~!@#$%^&*";

//Function to generate password
function generatePassword(){
     let genPassword="";
     let allChars="";

     allChars += lowercase.checked ? lowerChars :"";
     allChars += uppercase.checked ? upperChars :"";
     allChars += numbers.checked ? allNumbers :"";
     allChars += symbols.checked ? allSymbols :"";

     if(allChars == "" || allChars.length == 0){
          return genPassword;
     }

     let i=1;
    
     while(i<=inputSlider.value){
          genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
          i++;
     }
     return genPassword;
}

copyIcon.addEventListener('click', ()=>{
     if(passBox.value != "" || passBox.value.length >=1){
          navigator.clipboard.writeText(passBox.value);
          copyIcon.innerText="check";
          copyIcon.title="Password Copied";

          setTimeout(()=>{
               copyIcon.innerHTML="content_copy";
               copyIcon.title="";
          },3000);
     }
})