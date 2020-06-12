



/* for (var i =1 ; i <= 10 ; i = i +1){

console.log(i);
}

for (i =10 ; i <= 0 ; i = i -1){

    console.log(i);
} */

/* for (var i =0 ; i >=-200 ; i = i -5){

    console.log(i);
    } */
    
/* for (var i =500 ; i >=-0 ; i = i -10){

        console.log(i);
}
 */
/* for (var i = -500 ; i <=0 ; i = i +50){

            console.log(i);
}

for (i - 50 ; i >= -500 ; i = i - 50){

    console.log(i);
} */
     


for (var i = 1 ; i <= 100 ; i = i + 1 ){

    if ( i % 3 === 0 && i % 5 === 0){
        console.log( i + " FizzBuzz" );
    } else if( i % 5 === 0) {
        console.log( i + " Buzz");
    } else if (i % 3 === 0 ){

        console.log( i + " Fizz");
    }else{
        console.log(i);
    }
}
