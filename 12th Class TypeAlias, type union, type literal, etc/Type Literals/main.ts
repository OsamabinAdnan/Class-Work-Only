//type literal is a feature of TS in which you can assign values as a data type
//It is useful when you already know the input range of user, like days in a week, month in a years etc.

let sizes : "small" | "medium" | "large"
sizes = "small"
console.log(sizes)
sizes = "medium"
console.log(sizes)
sizes = "large"
console.log(sizes)

let trafficLights : "red" | "yellow" | "green"
trafficLights = "red"
console.log(trafficLights)
trafficLights = "yellow"
console.log(trafficLights)
trafficLights = "green"
console.log(trafficLights)