// 1. Type de données

caractersVariable = "Bonjour les amis";
numberVariable = 3;
booleanVariable = 2>4;
nullVariable = null;
undefinedVariable = undefined;
objectVarible = {
    firstElement : "firstElement",
    secondElement : "secondElement",
    theFunction : function(){
        return this.firstElement + '    ' + this.secondElement;
    }
}

arrayVaraible = ["element1", "element2", "element3", "element4"];

console.log( 
    'These are my variables' 
    + 'String : ' +caractersVariable + '    ' 
    + 'Number :' + numberVariable + '    '
    + 'Boolean : ' +booleanVariable + '    ' 
    + 'Null : ' + nullVariable + '    ' 
    + 'Undefined : ' + undefinedVariable + '    ' 
    + 'Object : ' + objectVarible.toString() + '    '
    + 'Array : ' + arrayVaraible
);


// 2. Opérations avec les variables
let a = 4, b = 6;

// Addition
console.log(a + b);

//Soustraction
console.log(a - b);

//Multiplication 
console.log(a * b);

// Division
console.log(a/b);


// 3. Fonction qui calcul
function square(n) {
    return n*n;
}
// Test fonction
console.log(square(4));

// 4. Fonction de vérification 
function isEven(n) {
    if(n == 0)
        return "n est null";
    return n % 2 == 0;
}
// Test fonction test verification
console.log(isEven(0));

