let btn=document.querySelectorAll('button');
let btn1=btn[0];
let btn2=btn[1];
btn1.addEventListener('click',()=>{
    let body=document.querySelector('body');
    body.style.backgroundColor='white';
});
btn2.addEventListener('click',()=>{
    let body=document.querySelector('body');
    body.style.backgroundColor='black';
})