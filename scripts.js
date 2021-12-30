// const box = document.querySelector('.box')
// const observer = new ResizeObserver((entries)=> {
//     const boxElement = entries[0]
//     const isLarge = boxElement.contentRect.height > 170 
//     boxElement.target.style.fontSize = isLarge ? "4rem" : "4rem"
// })
// observer.observe(box)

var randomNumber1 = Math.floor(6*Math.random())+1;
document.querySelectorAll('img')[0].setAttribute("src",`img/dice${randomNumber1}.png`);

var randomNumber2 = Math.floor((6*Math.random())+1);
document.querySelectorAll('img')[1].setAttribute("src",`img/dice${randomNumber2}.png`);

if(randomNumber1>randomNumber2){
    document.querySelector('h1').textContent = '⛳Player 1 Wins';
} else if(randomNumber1<randomNumber2){
    document.querySelector('h1').textContent = 'Player 2 Wins⛳';
} else {
    document.querySelector('h1').textContent = '⛳Draw!⛳';
}

