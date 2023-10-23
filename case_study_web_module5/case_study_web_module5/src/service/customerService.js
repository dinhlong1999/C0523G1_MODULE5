 const customerList = [
    {
        id: 1,
        name: "Dinh Long",
        birthday: "11-10-1999",
        address: "Da Nang",
        gender: "Male",
        phoneNumber: "0932533481",
        roomRented: "P101",
        rank: "Gold"
    },
    {
        id: 2,
        name: "Nha Van",
        birthday: "03-05-2001",
        address: "Sai Gon",
        gender: "Female",
        phoneNumber: "0783685099",
        roomRented: "P102",
        rank: "Platinum"
    },
    {
        id: 3,
        name: "Hong Hanh",
        birthday: "27-10-1971",
        address: "Hue",
        gender: "Female",
        phoneNumber: "0905346958",
        roomRented: "P103",
        rank: "Diamond"
    },
    {
         id: 4,
         name: "Dinh Lan",
         birthday: "05-11-1969",
         address: "Da Nang",
         gender: "Male",
         phoneNumber: "0905273809",
         roomRented: "P102",
         rank: "Gold"
     },
]
export function getAll() {
    return customerList;
}
export function saveCustomer(customer){
    return customerList.push(customer);
}
