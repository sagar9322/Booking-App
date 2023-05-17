console.log(`person1: show icket`);
console.log(`person2: show icket`);

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(`ticket`);
        },3000)
    });
    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrink = new Promise((resolve, reject) => resolve(`coldrinks`));
    let ticket = await promiseWifeBringingTickets;
    console.log(`wife: i have the tickets`);
    console.log(`husband: we should go in`);
    console.log(`wife: no i am hungry`);

    let popcorn = await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log(`husband: we should go in`);
    console.log(`wife: I need butter on my pop`);

    let butter = await getButter;
    console.log(`husband: i got some popcorn and ${butter} on it`);
    console.log(`husband: we should go in`);
    console.log(`wife: I need coldrinks`);

    let coldrinks = await getColdDrink;
    console.log(`husband: i have ${coldrinks}, popcorn and butter on it`);
    console.log(`husband: we should go in`);
    console.log(`wife: lets go`);
    return ticket;
}

preMovie().then((m) => console.log(`person3: show ${m}`));


console.log(`person4: show ticket`);
console.log(`person5: show ticket`);