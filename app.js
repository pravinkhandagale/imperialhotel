var btn = document.querySelector('#back2Top');
const hideBtn1 = document.querySelector('#hide1');
const hideBtn2 = document.querySelector('#hide2');
const hideBtn3 = document.querySelector('#hide3');
const hideDiv1 = document.querySelector('.hidden1');
const hideDiv2 = document.querySelector('.hidden2');
const hideDiv3 = document.querySelector('.hidden3');

hideBtn1.addEventListener('click', runevent1);
  function runevent1(){
    if(hideDiv1.style.display === 'block'){
      hideDiv1.style.display = 'none';
    } else {
      hideDiv1.style.display = 'block';
    }
}

hideBtn2.addEventListener('click', runevent2);
  function runevent2(){
    if(hideDiv2.style.display === 'block'){
      hideDiv2.style.display = 'none';
    } else {
      hideDiv2.style.display = 'block';
    }
}

hideBtn3.addEventListener('click', runevent3);
  function runevent3(){
    if(hideDiv3.style.display === 'block'){
      hideDiv3.style.display = 'none';
    } else {
      hideDiv3.style.display = 'block';
    }
}

window.onscroll = function(){myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 1300) {
    btn.className = 'show';
  } else {
    btn.className = '';
  }
}


