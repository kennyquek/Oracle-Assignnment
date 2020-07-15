module.exports = {
    generate: function (input) {

        var ele = 0;
        if (input.elements) {
            ele = input.elements;
        }

        var i;
        var fib = [];

        fib[0] = 0;
        fib[1] = 1;
        for (i = 2; i <= ele; i++) {
            // Next fibonacci number = previous + one before previous
            // Translated to JavaScript:
            fib[i] = fib[i - 2] + fib[i - 1];
        }

        let rFib = fib.slice().reverse();

        //sorted : The fibonacci seq is in ascending order
        var odd = [];
        var even = [];

        rFib.forEach(function(n) {
            if(n % 2 === 0){
                //even number
                even.push(n);
            }else{
                // odd number
                odd.push(n);
            }
        });

        let sorted = even.concat(odd);

        return {'fibonnacci': fib , 'sorted' : sorted};

    }
};
