function logScores(...scores) {

    console.log(scores);
    
    }
    
    logScores(50, 85, 75);
    
    function sayHello(name: string) : string {

        return `Hello ${name}!`
        
        }
        
        var h3 : number = sayHello( "Daffy Duck ")
        
        

        function sayHello2(name: string): string {
            return `Hello ${name}!`;
        }
        
        var h1: string = sayHello2("Daffy Duck");
        
        console.log(h1); // "Hello Daffy Duck!" ko print karega

        

        let prices: number[] = [100, 75, 42];

console.log(prices); // prices array ko direct print kara diya hai
    

const numbers = [1, 3, 5];

console.log(numbers[0]);

console.log(numbers[1]);

console.log(numbers[2]);


let product: [string, number];

product = [ "Table ", 500];

console.log(product[0]);

console.log(product[1]);