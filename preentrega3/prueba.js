export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


//   let result = getRandomInt(10000000,9999999999)
//   console.log(result);