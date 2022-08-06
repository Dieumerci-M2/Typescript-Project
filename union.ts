const  affichage = (aff1 : number | string, aff2 : boolean | number ) => {

    if(typeof aff1 === 'number' && typeof aff2 === 'number'){

        const answer = console.log(aff1 + aff2)
    }
    else if(typeof aff1 === 'string' && typeof aff2 === 'boolean')

    console.log(aff1, 'is a string')
}

affichage('je suis la',true)



