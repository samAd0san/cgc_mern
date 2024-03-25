/* This demonstrates the concept of closure. The inner function innerFunction has access to the variable
count from its outer lexical scope, even after the outer anonymous function has finished executing.
This allows innerFunction to maintain and increment the count variable across multiple invocations,
creating a closure over the count variable. */



// calling an anonymous function i.e the function which does not have a name
(function () {
    let count = 0;
    function innerFunction() {
        count++
        console.log(count);
    }
    innerFunction();
    innerFunction();
    innerFunction();
    innerFunction();
    innerFunction();
    innerFunction();
})();

// const invoke = innerFunction()
// invoke();

