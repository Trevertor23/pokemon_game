const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function() {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});
$btn1.addEventListener('click', function() {
    console.log('Explosion!');
    
    changeHP(30, character);
    changeHP(30, enemy);
  
});
$btn2.addEventListener('click', function() {
    console.log('One punch left');
    character.damageHP = 1;
    enemy.damageHP = 1;
    renderHP(character);
    renderHP(enemy);
});

function init(){
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
  
}
function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person){
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP + ' HP';
 
}
function renderProgressbarHP(person) {
        person.elProgressbar.style.width = person.damageHP + '%';
}
function changeHP(count, person){
    if (person.damageHP < count){
        person.damageHP = 0;
        alert('Бедный ' + person.name + ' проиграл бой!');
        $btn.disabled = true;
        $btn1.disabled = true;
        $btn2.disabled = true;
    }else {
        person.damageHP -= count;
    }
 

    renderHP(person);
}
function random(num){
    return Math.ceil(Math.random() * num);
}

init();
