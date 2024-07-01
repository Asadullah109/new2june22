function hello(name = "Alexander", ...nickNames: string[]) {
    console.log(`Hello ${name} aka ${nickNames}`);
}

hello("Imran","Alexander","Alex","Alexander the Great")


function hello1(name = "Assadullah", ...nickNames: string[]) {
    console.log(`Hello ${name} aka ${nickNames}`);
}

hello1("asad", "AsadullahBaloch", "Baloch", "asad the great")



function hello2(name = "Sara", ...nickNames: string[]) {
    console.log(`Hello ${name} aka ${nickNames}`);
}

hello2("Sara", "saraBaloch", "Sara is a good girl")