const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');
const $logs = document.querySelector('#logs');
let btn_1 = 6;
let btn_2 = 6;
let btn_3 = 6;
const buttCount = function (number) {
    if(number == 1) {btn_1--;}
    else if(number == 2) {btn_2--;}
    else if(number == 3) {btn_3--;}
    
    return function(){
        console.log(3232);
    };
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
        console.log(log);
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
        const log = this === enemy ? generateLog(character, this,count) : generateLog (enemy, this,count); ///////////////////////////////////////
        console.log(log);
        const $p = document.createElement('p');
        $p.innerText = log;
        $logs.insertBefore($p,$logs.children[0]);
    
        this.renderHP();
    }
}
const {name, type, ...rest} = character;
const {name: nameEnemy, type: typeEnemy, ...restEnemy} = enemy;


$btn.addEventListener('click', function() {
    console.log('Kick');
    rest.changeHP(random(20));
    restEnemy.changeHP(random(20));
    buttCount(1);
});
$btn1.addEventListener('click', function() {
    console.log('Explosion!');
    
    rest.changeHP(30);
    restEnemy.changeHP(30);
    buttCount(2);
  
});
$btn2.addEventListener('click', function() {
    console.log('One punch left');
    rest.damageHP = 1;
    restEnemy.damageHP = 1;
    rest.renderHP();
    restEnemy.renderHP();
    buttCount(3);
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
