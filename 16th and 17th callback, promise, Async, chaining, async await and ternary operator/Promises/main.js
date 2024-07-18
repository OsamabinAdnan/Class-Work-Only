//You web application becoming complex the no of callback function increases and it becomes callback hell 
//to resolve callback hell issue we use promises | promise is to avoid callback hell |should make tsconfig.json file when working on promises
function myFun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am resolved");
            reject("I am rejected");
        }, 2000);
    });
}
myFun().then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
});
//Another example
const Fn = () => {
    return new Promise((resolve, reject) => {
        resolve("Resolving");
        reject(10 * 6);
    });
};
Fn().then((res) => {
    console.log("Resolved");
})
    .catch((err) => {
    console.log("Catch:", err);
});
//Another example
const makePromise = () => {
    return new Promise((resolve, reject) => {
        let isError = false; //check value from false to true to check result
        if (isError) {
            setTimeout(() => {
                reject("There is an error");
            }, 2000);
        }
        else {
            setTimeout(() => {
                resolve("Successful Response");
            }, 2000);
        }
    });
};
makePromise().then((res) => {
    console.log("Promise fulfilled:", res);
}).catch((err) => {
    console.log("Catch error:", err);
});
//=============================== Explain Chaining and finally ===============================
/*
Means links with multiple stuff i.e., multiple .then and .catch
On the basis of single response (1st response) we can generate more responses
It works like passing the pillow first then () pass thr response to second then | return KW should be then, if return remove then we got undefinite
Chaining can be done in catch as well but only one catch is used which is due to promise reject then "then" will be used
Promise => reject => catch => then => then .......
.finally () ==> if then run or catch run, in both cases .finally () will run
*/
let isVistory = false;
const cricket = () => {
    return new Promise((resolve, reject) => {
        if (isVistory) {
            setTimeout(() => {
                resolve("You won");
            }, 2000);
        }
        else {
            setTimeout(() => {
                reject("Tum say na ho paye ga");
            }, 2000);
        }
    });
};
// // Passing the Pillow Concept
cricket().then((res) => {
    console.log(res);
    return "Man of the Match";
})
    .catch((error) => {
    console.log(error);
    return "Pack your bag";
})
    .then((res) => {
    console.log(res);
    return "Babar score 100 of 40 balls";
})
    .catch((error) => {
    console.log(error);
})
    .then((res) => {
    console.log(res);
    return "Pakistan won the WC";
})
    .catch((error) => {
    console.log(error);
})
    .finally(() => {
    console.log("Flight Pakro");
});
//Another example
let isFood = true;
const Cooking = (() => {
    return new Promise((resolve, reject) => {
        if (isFood) {
            setTimeout(() => {
                resolve("Food was Amazing");
            }, 3000);
        }
        else {
            setTimeout(() => {
                reject("Gas chali gai");
            });
        }
    });
});
Cooking().then((res) => {
    console.log(res);
    return "Biryani";
})
    .then((res) => {
    console.log(res);
    return "Chicken Biryani";
})
    .catch((error) => {
    console.log(error);
    return "Order from hotel";
})
    .then((res) => {
    console.log(res);
})
    .finally(() => {
    console.log("Eaten");
});
//Another example
let food = false;
let CookingFood = () => {
    return new Promise((resolve, reject) => {
        console.log("Food in Process");
        if (food) {
            setTimeout(() => {
                resolve("Food is Amazing");
            }, 2000);
        }
        else {
            setTimeout(() => {
                reject("Gas chali gai");
            }, 2000);
        }
    });
};
CookingFood()
    .then((res) => {
    console.log(res);
    return "Biryani";
})
    .then((res) => {
    console.log(res);
})
    .catch((error) => {
    console.log(error);
    return ("Order from hotel");
})
    .then((res) => {
    console.log(res);
})
    .finally(() => {
    console.log("Eating");
});
export {};
