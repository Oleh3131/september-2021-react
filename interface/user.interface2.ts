//
// export interface IuserTwo{
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: {
//         street: string;
//         suite: string;
//         city: string;
//         zipcode: string;
//         geo: {
//             lat: string;
//             lng: string;
//         }
//     },
//     phone: string;
//     website: string;
// }

// -------------------------------------------------------------------------------------------------------------------------

// Можна розділити обєкт на дві части з вкладеністю. Хоча всерівно він буде як один


// export interface IuserTwo{
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address:Iaddress;
//     phone: string;
//     website: string;
// }
//
//
// interface Iaddress{
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//         lat: string;
//         lng: string;
//     }
// }