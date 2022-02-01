class Selectors {
    constructor(name){
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.elPhoto = document.getElementById(`img-${name}`);
        
    }
}
class character extends Selectors{
    constructor({img,name,hp,type,selectors,attacks = []}) {
        super(selectors);
        this.img = img;
        this.name = name;
        this.defaultHP = hp;
        this.damageHP = hp;
        this.type = type;

        this.attacks = attacks;
        
        this.renderHP();
        this.elPhoto.src = this.img;
    }
    renderHP =  ()=>{
        this.renderHPLife();
        this.renderProgressbarHP();
    }
    
    
    renderHPLife=  ()=>{
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP + ' HP';
     
    }
    renderProgressbarHP=  ()=> {
            this.elProgressbar.style.width = this.damageHP + '%';
    }
    changeHP=  (count,enemy)=>{
        const $logs = document.querySelector('#logs');
        if (this.damageHP < count){
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
            $btn.disabled = true;
            $btn1.disabled = true;
            $btn2.disabled = true;
        }else {
            this.damageHP -= count;
        }
       // const log = this === enemy ? generateLog(character, this,count) : generateLog (enemy, this,count);
       const log = generateLog(enemy,this,count);
        //console.log(log);
        const $p = document.createElement('p');
        $p.innerText = log;
        $logs.insertBefore($p,$logs.children[0]);
        this.renderHP();
    }
}
export default character;