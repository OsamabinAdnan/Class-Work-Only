/*await express only allow with async function
In async programing we have try block for resolve/response and catch block for reject/error
Whenever you use try block, you have to use catch or final block

*/
let isVistory = true
const Cricket = () => {
    return new Promise((resolve, reject)=>{
        if (isVistory){
            setTimeout(()=>{
                resolve("Hurray! we have won")
            }, 3000)
        } else {
            setTimeout(()=>{
                reject ("Tum say na ho paye ga")
            }, 3000)
        }
    }) 
}
async function getresult (){
    try{
    const result = await Cricket();
    console.log(result)
    }
    catch(error){
        console.log(error);        
    }
    finally {
        console.log("Come back home");        
    }
    return "Into the Next tournament" //if you want to return async await function then use return after final {code}
}
getresult();

//Another example
let isCow = true
const findAnimal = () => {
    return new Promise ((resolve, reject)=>{
        if (isCow){
            setTimeout(()=>{
                resolve ("We found a cow")
            }, 2000)
        } else {
            setTimeout(()=>{
                reject ("No cow found")
            }, 2000)
        }
    })
}

async function getAnimal (){
       try{
        let animal = await findAnimal();
        console.log(animal);
    }
    catch (err){
        console.log(err);
    }
    finally{
        console.log("Come back home");
    }
}
getAnimal();