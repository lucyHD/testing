
class Person {
    constructor(name, health, fave){
        this.name = name;
        this.health = health;
        this.fave = fave;
    }
    increaseHealth(){
        this.health++;
    }
    decreaseHealth(){
        this.health--;

    }
    addFave(){
        this.fave.pop()
    }
}

const ann = new Person ("Ann", 100, ["sushi", "pear", "potato", "cherries"]);

const message = (string) =>{

    return `hello ${string}`
}

module.exports = {
    Person,
    ann,
    message
}