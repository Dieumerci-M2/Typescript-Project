const porfolio : {
    nom : string;
    postNom : string;
    Adresse : object;
    hobbies : string[]
} = {
    nom : 'Dieme',
    postNom : 'Md',
    Adresse  :  {
        quartier : 'kyeshero',
        Av : 'Lusaka',
        Num : 45
    },
    hobbies : ['sport', 'sleeping','videoGame']
}

for(const hobby of porfolio.hobbies){
    console.log(hobby)
}


