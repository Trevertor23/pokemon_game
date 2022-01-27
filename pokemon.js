class Selectors {
    constructor(name){
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        console.log(name);
    }
}
class character extends Selectors{
    constructor({name,dhp,type,selectors}) {
        super(selectors);
        this.name = name;
        this.defaultHP = dhp;
        this.damageHP = dhp;
        this.type = type;
        
        this.renderHP();
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