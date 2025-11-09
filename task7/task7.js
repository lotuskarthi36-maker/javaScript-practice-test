const lotus = {
    name : "lotus",
    age : 19,
    city : function(){
        console.log(this.name)
    }
}
const sharan = {
    name : "sharan",
    age : 19
}
let x = lotus.city.bind(sharan);
x();

lotus.city.apply(sharan);
