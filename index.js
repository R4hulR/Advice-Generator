var btn=document.getElementById('btn');
const url='https://api.adviceslip.com/advice';
var number=document.getElementById('advice-no');
var advice=document.getElementById('advice');
btn.addEventListener('click',async()=>{
    const respone=await fetch(url);
    const data=await respone.json();
    number.innerHTML=`Advice #${data.slip.id}`;
    advice.innerHTML=`"${data.slip.advice}"`;
})