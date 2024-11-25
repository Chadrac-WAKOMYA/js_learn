// 1. Type de données

caractersVariable = "Bonjour les amis";
numberVariable = 3;
booleanVariable = 2>4;
nullVariable = null;
undefinedVariable;
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
    + 'Number :' + numnerVariable + '    '
    + 'Boolean : ' +booleanVariable + '    ' 
    + 'Null : ' + nullVariable + '    ' 
    + 'Undefined : ' + undefinedVariable + '    ' 
    + 'Object : ' + objectVarible + '    '
    + 'Array : ' + arrayVaraible
);

