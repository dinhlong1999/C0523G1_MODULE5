const contactList = [
    {
        id:1,
        contactDate: "01-10-2023",
        endDate: "03-10-2023",
        deposits: "1.500.000Đ",
        cost : "3.000.000Đ",
        customerID: 1,
        facilityID:1
    },
    {
        id:2,
        contactDate: "01-10-2023",
        endDate: "03-10-2023",
        deposits: "1.500.000Đ",
        cost : "3.000.000Đ",
        customerID: 2,
        facilityID:2
    },
    {
        id:3,
        contactDate: "01-10-2023",
        endDate: "03-10-2023",
        deposits: "1.500.000Đ",
        cost : "3.000.000Đ",
        customerID: 3,
        facilityID:3
    },
    {
        id:4,
        contactDate: "01-10-2023",
        endDate: "03-10-2023",
        deposits: "1.500.000Đ",
        cost : "3.000.000Đ",
        customerID: 4,
        facilityID:4
    }
];

export function getAll() {
    return contactList;
}
export function saveContact(contact) {
    return contactList.push(contact);

}