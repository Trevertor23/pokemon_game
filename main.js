// const $btn = document.getElementById('btn-kick');
// const $btn1 = document.getElementById('btn-kick1');
// const $btn2 = document.getElementById('btn-kick2');
// const $logs = document.querySelector('#logs');
const $test = document.querySelector('#btn-test');
const $control = document.querySelector('.control');

import Pokemon from "./pokemon.js";
import Abilities from "./abilities.js";
import { pokemons } from "./pokemons.js";
import {random} from "./rand.js";


const powers = new Abilities();
const p1 = pokemons[random(0,pokemons.length-1)];
const p2 = pokemons[random(0,pokemons.length-1)];
console.log(powers);

const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',   
    hp: 100,
    ...p1,
    selectors:'player1',
});
const player2 = new Pokemon({
    name: 'Charmander',
    type: 'flamic',   
    hp: 100,
    ...p2,
    selectors:'player2',
});

function buttCount(count = 6,el){
    const inner = el.innerText;
    el.innerText = `${inner} (${count})`;
    return function(){
        count--;
        if (count == 0)
            el.disabled = true;
        el.innerText = `${inner} (${count})`;
        return count;
    }
}


player1.attacks.forEach(item=>{
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const btnCount = buttCount(item.maxCount,$btn);
    $btn.addEventListener('click', ()=>{
        console.log('Click button ',$btn.innerText);
        btnCount();
    })

    $control.appendChild($btn);
})
const {name, type, ...rest} = player1;
const {name: nameEnemy, type: typeEnemy, ...restEnemy} = player2;

// const btnCount = buttCount(6,$btn);
// const btn1Count = buttCount(6,$btn1);
// const btn2Count = buttCount(6,$btn2);

// $btn.addEventListener('click', ()=> {
//     powers.kick(player1,player2);
//     btnCount();
// });
// $btn1.addEventListener('click', ()=> {
//     powers.explosion(player1,player2);
//     btn1Count();
  
// });
// $btn2.addEventListener('click', ()=> {
//     powers.onePunch(player1,player2);
//     btn2Count();
// });

// $test.addEventListener('click', ()=>{
//     console.log(player1.defaultHP);
// });

function init(){
    console.log('Start Game!');
    player1.renderHP();
    player2.renderHP();
}


init();