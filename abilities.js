class Abilities{
    kick = (p1,p2)=>{
        console.log('Kick');
        p1.changeHP(this.random(20),p2);
        p2.changeHP(this.random(20),p1);
    }
    explosion = (p1,p2)=>{
        console.log('Explosion!');
        p1.changeHP(30,p2);
        p2.changeHP(30,p1);
    }
    onePunch = (p1,p2)=>{
        console.log('One punch left');
        p1.changeHP(p1.damageHP-1,p2);
        p2.changeHP(p2.damageHP-1,p1);
    }
    random = (num) => {
        return Math.ceil(Math.random() * num);
    }
}

export default Abilities;