//Array e Objetos

// 5 categorias das funções parra arrat


//acessar elementos
const numbers = [1, 30, 40];
const companies = ["a", "b", "c"];

console.info("----------------------Every----------------------------");
console.log(numbers.every((val) => val > 10));
console.info("----------------------Every----------------------------");


//iteração
//o proprio array 
companies.forEach(item => console.log("Exibindo item", item));

//imutabilidade - Dados não mudam, eles evoluem, eu não altero informações
//mudo estados
console.info("----------------------Fill----------------------------");
console.log(companies.fill("x", 0, 2));
console.info("----------------------Fill----------------------------");



//iteração avançada



//modificação



//funções gerais
const fields = ["name", "email", "phone"];

console.log("antes", fields.length);

fields.push("email");
console.log("depois", fields);


