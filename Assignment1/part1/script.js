var a = 0;
var b = 0;

const c1 = document.getElementById(1);
c1.addEventListener('click', () => {
    if (a == 0 && b == 0) {
        alert("c1");
    }
    a = 0;
    b = 0;
});

const c2 = document.getElementById(2);
c2.addEventListener('click', () => {
    if (b == 0) {
        alert("c2");
        a = 1;
    }
    b = 0;
});

const c3 = document.getElementById(3);
c3.addEventListener('click', () => {
    alert("C3");
    b = 1;
});