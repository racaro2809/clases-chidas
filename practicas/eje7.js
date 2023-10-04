"eje7"
function statusConnection(users) {
    let personasOnline = users.filter((persona) => persona.status === "online");
    if (personasOnline.length === 0) {
        return "No hay usuarios conectados";
    }
    const emails = personasOnline.map((persona) => persona.email);
    return emails;
}

const users = [
    {
        name: "Juan",
        lastName: "Perez",
        email: "juap123@gmail.com",
        status: "online"
    },
    {
        name: "Melisa",
        lastName: "Rendon",
        email: "melirendon123@gmail.com",
        status: "online"
    },
    {
        name: "Adriana",
        lastName: "Lopez",
        email: "adrilopez123@gmail.com",
        status: "offline"
    },
]

const result = statusConnection(users);
console.log(result);