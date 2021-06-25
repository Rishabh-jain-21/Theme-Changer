console.log('This is text');
let count = 2;
let but = document.getElementById('but1');
but.addEventListener('click' , (e)=>{
    if(count%2==0){
    document.body.style.backgroundColor = '#402218';
    document.getElementById('head1').style.color = '#C68B59';
    document.getElementById('head2').style.color = '#C68B59';
    document.getElementById('but1').style.backgroundColor = '#C68B59';
    document.getElementById('but2').style.backgroundColor = '#C68B59';
    document.getElementById('but1').style.color = '#402218';
    document.getElementById('but2').style.color = '#402218';
    document.getElementById('cir').style.backgroundColor = '#402218';
    let an = document.getElementById('but1');
    an.style.padding = "3px 4px 3px 40px";
    }
    else{
    document.body.style.backgroundColor = '#053742';   
    document.getElementById('head1').style.color = '#39A2DB';
    document.getElementById('head2').style.color = '#39A2DB';
    document.getElementById('but1').style.backgroundColor = '#A2DBFA';
    document.getElementById('but2').style.backgroundColor = '#A2DBFA';
    document.getElementById('but1').style.color = '#053742';
    document.getElementById('but2').style.color = '#053742';
    document.getElementById('cir').style.backgroundColor = '#053742';
    let an = document.getElementById('but1');
    an.style.padding = "3px 40px 3px 4px";
    }
    count++;
});
let reloa = document.getElementById('but2');
reloa.addEventListener('click' , function(e){
    location.reload();
})
console.log(but);