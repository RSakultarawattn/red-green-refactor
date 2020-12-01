

const spot = { name: 'spot', age: 5, weight: '20 lbs' }


function getName(obj) {

    const { name } = spot
    return name;
}



module.exports = {
    spot,
    getName
}