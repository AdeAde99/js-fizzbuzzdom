for (let i = 1; i <=100; i++) {
    console.log (i);

    const square = document.createElement('div');
    square.classList.add('square');
    square.innerHTML = i;

    if (i % 5 == 0 && i % 3 == 0) {
        square.classList.add('FizzBuzz');
        square.innerHTML = 'FizzBuzz';
    } else if (i % 5 == 0) {
        square.classList.add('Buzz');
        square.innerHTML = 'Buzz';
    } else if (i % 3 == 0) {
        square.classList.add('Fizz');
        square.innerHTML = 'Fizz';
    }
    
    container.append(square);
}
