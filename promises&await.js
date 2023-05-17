console.log(`person1: show icket`);
console.log(`person2: show icket`);

const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(`ticket`);
    },3000)
});

const getPopcorn = promiseWifeBringingTickets.then((t) => {
    console.log(`wife: i have the tickets`);
    console.log(`husband: we should go in`);
    console.log(`wife: no i am hungry`);
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));

});
const getButter = getPopcorn.then((t) => {
    console.log(`husband: i got some popcorn`);
    console.log(`husband: we should go in`);
    console.log(`wife: I need butter on my pop`);
    return new Promise((resolve,reject) => resolve(`${t} butter`));

});
const getColdDrink = getButter.then((t) => {
    console.log(`husband: i got some popcorn and butter on it`);
    console.log(`husband: we should go in`);
    console.log(`wife: I need coldrinks`);
    return new Promise((resolve,reject) => resolve(`${t} coldrinks`));

});
getColdDrink.then((t) => console.log(t));

console.log(`person4: show ticket`);
console.log(`person5: show ticket`);