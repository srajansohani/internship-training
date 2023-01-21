
const mid = document.getElementById(5);
/*
        1 2 3
        4 5 6 
        7 8 9
                */
const x1 = document.getElementById(1);
const x2 = document.getElementById(2);
const x3 = document.getElementById(3);
const x6 = document.getElementById(6);
const x9 = document.getElementById(9);
const x8 = document.getElementById(8);
const x7 = document.getElementById(7);
const x4 = document.getElementById(4);

mid.addEventListener('click', () => {
    var x = x1.innerHTML;
    console.log(x);
    var temp;
    ///////
    temp = x2.innerHTML;
    x2.innerHTML = x1.innerHTML;
    x = temp;
    ///////
    temp = x3.innerHTML;
    x3.innerHTML = x;
    x = temp;
    ///////
    temp = x6.innerHTML;
    x6.innerHTML = x;
    x = temp;
    //////////
    temp = x9.innerHTML;
    x9.innerHTML = x;
    x = temp;
    //////////
    temp = x8.innerHTML;
    x8.innerHTML = x;
    x = temp;
    ///////
    temp = x7.innerHTML;
    x7.innerHTML = x;
    x = temp;
    //////////
    temp = x4.innerHTML;
    x4.innerHTML = x;
    x = temp;
    ///////////
    temp = x1.innerHTML;
    x1.innerHTML = x;
    x = temp;
    ///////////
})