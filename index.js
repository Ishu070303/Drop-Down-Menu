document.getElementById('wrapper').style.display='none';
const drop=document.querySelector('#drop')
const tr=drop.nextElementSibling
tr.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('wrapper').style.display='';
    
})

document.getElementById('menu1').style.display='none';
const data=document.querySelector('#menu').children[1].addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('menu1').style.display='';
    
})

document.querySelector('.alert').addEventListener('click',(e)=>{
    console.log(e.target.value);
    document.getElementById('menu1').style.display='none';
    
})

