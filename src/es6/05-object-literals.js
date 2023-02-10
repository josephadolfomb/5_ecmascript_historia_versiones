//enhaced object literals
//para no hacer la misma asignacion al mismo elemento

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("gndx", 34, "MX", 1));