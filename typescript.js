"use strict";
//exports.__esModule = true;
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["AUTHOR"] = 100] = "AUTHOR";
})(Role || (Role = {}));
var porfolio = //: {
 
//     nom : string;
//     postNom : string;
//     Adresse : object;
//     hobbies : string[];
//     role : object
//} = 
{
    nom: 'Dieme',
    postNom: 'Md',
    Adresse: {
        quartier: 'kyeshero',
        Av: 'Lusaka',
        Num: 45
    },
    hobbies: ['sport', 'sleeping', 'videoGame'],
    role: Role.ADMIN
};
for (var _i = 0, _a = porfolio.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log(porfolio.role);
