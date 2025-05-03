{

    //destructuring 

const user = {
    id: 345,
    name: {
        firstName: "shahidul",
        middleName: "islam",
        lastName: "shohid",
    },
    contactNo: "01700000000",
    address: "Uganda",
}

const {contactNo, name: {middleName: midName}} = user

const friends = ['candler', "joey", "ross", "rachel", "monica", "phoebe"]
const [, , candler, ...rest] = friends



}