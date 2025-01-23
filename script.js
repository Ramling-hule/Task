const bottomright = document.body.querySelector('#lastdiv')
const eles = document.body.querySelectorAll('.smalldiv')


bottomright.addEventListener('click', () => {
    eles.forEach((e) => {
            e.style.backgroundColor = "blue"
        
    });
})


eles.forEach((e) => {
    e.addEventListener('click', () => {
       e.style.backgroundColor = "red"
    })
});

const homes = document.querySelector('#div3')  

function goToUrl(url) {
    window.location.href = url;
}



const linkedin = document.getElementById("linkedin")

linkedin.addEventListener('click', () => {
    goToUrl('https://www.linkedin.com/in/ramlinghule/');
});

const grid = document.getElementById("grid");
grid.addEventListener('click', () => {
    goToUrl('http://127.0.0.1:5500/index.html');
});

const home = document.getElementById("home");
home.addEventListener('click', () => {
    goToUrl('http://127.0.0.1:5500/second.html');
});

const insta = 'http://127.0.0.1:5500/second.html'.document.getElementById("insta");
insta.addEventListener('click', () => {
    goToUrl('https://www.instagram.com/ramling_hule/');
});


