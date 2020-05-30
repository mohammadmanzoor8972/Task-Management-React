export function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}

export const GUID=()=>{
    return `${randomNumber(10, 666)}-${randomNumber(666, 777)}-${randomNumber(756, 867)}`
}