// function getAnimalData(){
//     fetch("https://fakerapi.it/api/v1/persons")
//     .then((response) => {
//         response.json()
//         .then( (finalResult) => {
//             console.log(finalResult);
//     })
//     })
// }





async function getAnimalData(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finalResult = await response.json()
    console.log(finalResult);
}