var numero = 1;
for(var i = 0; i < 100; i++) {

    if (numero % 3 == 0 && numero % 5 == 0){
        document.getElementById("list").innerHTML += "<li> " +  "FizzBuzz" + "</li> " ;
        ;
    } else if (numero % 3 == 0){
        document.getElementById("list").innerHTML += "<li> " +  "Fizz" + "</li> " ;
        
    } else if (numero % 5 == 0){
        document.getElementById("list").innerHTML += "<li> " +  "Buzz" + "</li> " ;
        
    } else {
        document.getElementById("list").innerHTML += "<li> " +  numero + "</li> " ;
        
    }
    
    numero++;
}