for (let i = 1; i <=100; i++) {
    console.log (i);

    const square = document.createElement('div');
    square.classList.add('square');
    square.innerHTML = i;

    if (i % 5 == 0 && i % 3 == 0) {
        square.classList.add('fizzbuzz');
        square.innerHTML = 'fizzbuzz';
    } else if (i % 5 == 0) {
        square.classList.add('buzz');
        square.innerHTML = 'buzz';
    } else if (i % 3 == 0) {
        square.classList.add('fizz');
        square.innerHTML = 'fizz';
    }
    
    container.append(square);
}
