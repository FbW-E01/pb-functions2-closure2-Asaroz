// JS Closures / Scoping exercises
// What’s the result of executing this code and why.
// function test() {
//    console.log(a);
//    console.log(foo());
   
//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test();
// ________________________________________________________________
// What is result?
//undefined and 2
//undefined because a is at the time of the console.log not declared. The 2 because it calls a function wich returns 2. You can call functions regardless of code flow. Only the scope is important


//_________________________________________________________________
// function someFunction(number) {
//   function otherFunction(input) {
//     return a;
//   }
  
//   a = 5;
  
//   return otherFunction;
// }

// var firstResult = someFunction(9);
// var result = firstResult(2);
// console.log(result)

//The otherfunction doesnt do anything with the input it just returns a(5) wich is declared in the function over it and is now part of firstResult. 
//So otherFunction can still acces a. It is withing its scope


//_________________________________________________________________

// What is the result of the following code? Explain your answer.
// var fullname = 'John Doe';
// var obj = {
//    fullname: 'Colin Ihrig',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function() {
//          return this.fullname;
//       }
//    }
// };

// console.log(obj.prop.getFullname());

// var test = obj.prop.getFullname;

// console.log(test());

//it gives us 'Aurelio De Rosa' and undefined
// in line 55 it does not give test the function. its tries to give it  a string. To give test the function we need to add Parenthese
//var test = obj.prop.getFullname();



// What will you see in the console for the following example?
// var a = 1; 
// function b() { 
//     a = 10; 
//     return; 
//     function a() {} 
// } 
// b(); 
// console.log(a);   
// it returns 1. It seems like the function "a" changes what the a=10 inside the function scope referse too. 
//before we give 10 into a i think a is the function and not the var