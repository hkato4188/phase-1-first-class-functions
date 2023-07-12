function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunc(){console.log("we got the funk");};
}

function returnsAnAnonymousFunction(){
    return () => console.log("nobody knows my name!");
}