
const atclass = require('../modules/atclass');

// test("should increase health by 1", () =>{
//     expect(atclass.ann.health).toBe(100);
//     atclass.ann.increaseHealth();
//     expect(atclass.ann.health).toBe(101);
//     atclass.ann.decreaseHealth();
//     expect(atclass.ann.health).toBe(100)

// })


// test("should NOT contain cherries", () =>{

//     atclass.ann.addFave();
//     expect(atclass.ann.fave).toContain("sushi", "pear", "potato")

// })

test("should contain hello Kay", () =>{

    expect(atclass.message("Kay")).toContain("hello Kay");

})


describe("Increase and decrease of health value", () => {

    test("should increase health by 1", () =>{
        expect(atclass.ann.health).toBe(100);
        atclass.ann.increaseHealth();
        expect(atclass.ann.health).toBe(101);
    })

    test("should decrease health by 1", () =>{
        expect(atclass.ann.health).toBe(101);
        atclass.ann.decreaseHealth();
        expect(atclass.ann.health).toBe(100);
    })

}) 
