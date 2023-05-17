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
    let [popcorn, butter,coldrinks] = await Promise.all([getPopcorn,getButter,getColdDrink])
    console.log(`${popcorn}, ${butter}, ${coldrinks}`);
    return ticket;
}

preMovie().then((m) => console.log(`person3: show ${m}`));


console.log(`person4: show ticket`);
console.log(`person5: show ticket`);