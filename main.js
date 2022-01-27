const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');
const $logs = document.querySelector('#logs');
const $test = document.querySelector('#btn-test');

import Pokemon from "./pokemon.js";
const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',   
    dhp: 100,
    selectors:'character',

    
});
console.log(player1);
// let btn_1 = 6;
// let btn_2 = 6;
// let btn_3 = 6;
// const buttCount = function (number) {
//     if(number == 1) {btn_1--; console.log("Усього натиснень - "+(6-btn_1)+". Залишилось натиснень на першу кнопку - " + btn_1);}
//     else if(number == 2) {btn_2--;console.log("Усього натиснень - "+(6-btn_2)+". Залишилось натиснень на другу кнопку - " + btn_2);}
//     else if(number == 3) {btn_3--;console.log("Усього натиснень - "+(6-btn_3)+". Залишилось натиснень на третю кнопку - " + btn_3);}
    
//     return function(){
//         let bb=0;
//         console.log(bb);
//     };
// }
    // const buttonCount = buttCount(1);
    // buttonCount(22);

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
const character = {
    name: 'Pikachu',
    type: 'electric',   
    weakness:['fighting', 'water','some'],
    resistance:['steel'],
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),

    renderHP: function(){
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    
    
    renderHPLife: function(){
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP + ' HP';
     
    },
    renderProgressbarHP: function () {
            this.elProgressbar.style.width = this.damageHP + '%';
    },
    changeHP: function (count){

        if (this.damageHP < count){
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
            $btn.disabled = true;
            $btn1.disabled = true;
            $btn2.disabled = true;
        }else {
            this.damageHP -= count;
        }
        const log = this === enemy ? generateLog(character, this,count) : generateLog (enemy, this,count);
        //console.log(log);
        const $p = document.createElement('p');
        $p.innerText = log;
        $logs.insertBefore($p,$logs.children[0]);
        this.renderHP();
    }
}

const enemy = {
    name: 'Charmander',
    type: 'flamic',   
    weakness:['fighting', 'water','some'],
    resistance:['fire'],
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),

    renderHP: function(){
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    
    renderHPLife: function(){
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP + ' HP';
     
    },
    renderProgressbarHP: function () {
            this.elProgressbar.style.width = this.damageHP + '%';
    },
    changeHP: function (count){
        
       
  
        
        if (this.damageHP < count){
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
            $btn.disabled = true;
            $btn1.disabled = true;
            $btn2.disabled = true;
        }else {
            this.damageHP -= count;
        }
        const log = this === enemy ? generateLog(character, enemy,count) : generateLog (enemy, character,count); ///////////////////////////////////////
        //console.log(log);
        console.log();
        const $p = document.createElement('p');
        $p.innerText = log;
        $logs.insertBefore($p,$logs.children[0]);
    
        this.renderHP();
    }
}
const {name, type, ...rest} = character;
const {name: nameEnemy, type: typeEnemy, ...restEnemy} = enemy;

const btnCount = buttCount(6,$btn);
const btn1Count = buttCount(6,$btn1);
const btn2Count = buttCount(6,$btn2);

$btn.addEventListener('click', ()=> {
  //  if(btn_1==0) {console.log('Ліміт використання вичерпано!');return;}
    console.log('Kick');
    rest.changeHP(random(20));
    restEnemy.changeHP(random(20));
    btnCount();
});
$btn1.addEventListener('click', ()=> {
    //if(btn_2==0) {console.log('Ліміт використання вичерпано!');return;}
    console.log('Explosion!');
    
    rest.changeHP(30);
    restEnemy.changeHP(30);
    btn1Count();
  
});
$btn2.addEventListener('click', ()=> {
    //if(btn_3==0) {console.log('Ліміт використання вичерпано!');return;}
    console.log('One punch left');
    rest.damageHP = 1;
    restEnemy.damageHP = 1;
    rest.renderHP();
    restEnemy.renderHP();
    btn2Count();
});

$test.addEventListener('click', ()=>{
    console.log(player1.defaultHP);
});

function init(){
    console.log('Start Game!');
    rest.renderHP();
    restEnemy.renderHP();
}

function random(num){
    return Math.ceil(Math.random() * num);
}

init();
