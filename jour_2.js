function fonct(nbre){
    return null;
}


const livre = {
    title : "the truth",
    author : "Mr Chadrac",
    makeSummary : function (){
        return this.title + "  " + this.author
    }
};

nombre = [1,2,4,5,8,3,9];
function calMoyen(tabNbre){
    var sum = 0;
    tabNbre.forEach(nbre => {
        sum += nbre;
    });
    return sum/tabNbre.length;
}
