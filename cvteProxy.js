/**
 * 要求：
 * function proxy(a, b){
 *  //TODO
 * }
 * var Animal = {};
 * var Cat = {
 *  name: 'Hoe'
 * };
 * proxy(Animal, Cat);
 * Animal.name = 'Tom';
 * console.log(Cat.name); //Tom
 */

function proxy(a, b){
    Object.defineProperty(a, 'name' ,{              
        set: function(newName){
            b.name = newName;
        },
        configurable: true,
    });
}

var Animal = {};
var Cat = {name: 'Hoe'};
proxy(Animal, Cat);
Animal.name = 'Tom';

console.log(Cat.name);