//kita buat data dummy terlebih dahulu (simulasi data base)


let users = [
    {id: 1, name: "Budi", email: "budi@mail.com" },
    {id: 2, name: "Siti", email: "sisi@mail.com" },
];

// kita buat fungsi fungsi untuk manipulasi data

const findAll = () => {
    return users;
}

const findById = (id) => {
    return users.find((user) => user.id === id);
}

const create = (data) => {
    const newUser = {
        id: users.length + 1, // auto id sederhana njir
        ...data
    }
    users.push(newUser)
    return newUser;
}

const update = (id, data) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1){
        // lakukan update dari data lama ke data baru
        users[index] ={...users[index], ...data};
        return users[index];
    }
    return null // kalo id ga ketemu ya return null
}

const remove = (id) => {
    const initialLeght = users.length;
    users = users.filter((user) => user.id !== id);
    //return true jika ada yang terhapus
    return users.length < initialLeght;
}

module.exports = {findAll, findById, create, update, remove}