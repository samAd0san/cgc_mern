// Migration - Converting of sloppy mode code to strict mode is known as migration

// Strict mode can also be used in a function specific area

/* We often use strict mode inside the particular blocks because, when there are
large program declaring the strict mode globally may effect the entire code 
and it may take time to make it perfect acc to strict mode 

so we use strict mode in block wise and make the code better accordingly */


fn(); // calling the function before the declaration is K.A Hoisting

function fn() {
    'use strict';
    x = 10; // throws an exception 'x not define'
    console.log(x);
}

function add(a, a) { // will throw exception
    'use strict';
    console.log(a + a); 
}

add(10, 20);


