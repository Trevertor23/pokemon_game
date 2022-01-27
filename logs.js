function generateLog(firstPerson,secondPerson,damage){
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. Damage:-${damage} -  ${secondPerson.name} : [${secondPerson.damageHP}/${secondPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. Damage:-${damage} :  [${secondPerson.damageHP}/${secondPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. Damage:-${damage} :  [${secondPerson.damageHP}/${secondPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. Damage:-${damage} :  [${secondPerson.damageHP}/${secondPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Damage:-${damage} :  [${secondPerson.damageHP}/${secondPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. Damage:-${damage} :  [${secondPerson.damageHP}/${secondPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. Damage:-${damage} :  [${secondPerson.damageHP}/${secondPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. Damage:-${damage} :  [${secondPerson.damageHP}/${secondPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. Damage:-${damage} :  [${secondPerson.damageHP}/${secondPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. Damage:-${damage} :  [${secondPerson.damageHP}/${secondPerson.defaultHP}]`
    ];

    //return logs[random(logs.length)-1];
    return logs[Math.ceil(Math.random() * logs.length)-1];
}