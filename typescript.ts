import { EnumType } from "typescript";

enum Role {ADMIN = 'Admin', AUTHOR = 100}
 const porfolio =//: {
//     nom : string;
//     postNom : string;
//     Adresse : object;
//     hobbies : string[];
//     role : object
//} = 
{
    nom : 'Dieme',
    postNom : 'Md',
    Adresse  :  {
        quartier : 'kyeshero',
        Av : 'Lusaka',
        Num : 45
    },
    hobbies : ['sport', 'sleeping','videoGame'],
    role : Role.ADMIN,
    
}

for(const hobby of porfolio.hobbies){
    console.log(hobby)
}
console.log(porfolio.role)




