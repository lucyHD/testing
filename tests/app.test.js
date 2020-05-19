
 const app = require('../modules/app');

// test("must return 8 when 5 and 3 are passed", ()=> {
//     expect(app.add(5,3)).not.toBe(7); 
// })

// //line 2 is importing from app.js 


test("must return 4 when 2 and 2 are passed", ()=>{

    expect(app.multiply(2,2)).toBe(4);

})

// test("should contain Ben", () => {
//     expect(app.someNames).toContain("Ben");
// })

//if we would use .toBe() it would check the whole array not individual items in the array (in the above test)

// test("must return array", () => {
//     expect(app.arr).toBe("[]");
// })