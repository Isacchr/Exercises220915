
function exercise1() {

    var txtBoxValue = document.getElementById('txt1').value;
    const words = txtBoxValue.split(' ');

    words.forEach(input => {
        console.log(`${input}, ${input.length}`);
    });


}

function exercise2() {

    var txtBoxValue = document.getElementById('txt1').value;
    const words = txtBoxValue.split(' ');
    const reversed_words = txtBoxValue.split(' ');
    


    sortedwords = words.sort((a, b) => b.length - a.length);
    sortedwords.forEach(input => {
        console.log(`${input}`);
    })

    reversedwords = reversed_words.reverse();
    reversedwords.forEach(input => {
        console.log(`${input}`);
    })


}

function exercise3 () {

    var txtBoxValue = document.getElementById('txt1').value;
    const words = txtBoxValue.split(' ');

    let obj = [];

    words.forEach((word) => {

         if (obj[word] == undefined) {
                obj[word] = 1;
            } else {
                obj[word]++;
            }
    });

    for (const freq in obj) {
        console.log(`${freq}: ${obj[freq]}`);
    }


    const freqArray = Array.from(Object.keys(obj));

    freqArray.sort((a, b) => obj[a] - obj[b] );

    sortedFreqArray = freqArray.reverse();
    
    sortedFreqArray.forEach(word => {
            console.log(`${word}`);
    })

}

function exercise4 () {

    var txtBoxValue = document.getElementById('txt1').value;
    const nowhitespace = txtBoxValue.replace(/\s/g, '');
    const letters = nowhitespace.split('');

    let freq = [];

    letters.forEach((letter) => {

         if (freq[letter] == undefined) {
            freq[letter] = 1;
        } else {
            freq[letter]++;
        }  

    });

    for (const letterFrequence in freq) {
        console.log(`${letterFrequence}: ${freq[letterFrequence]}`);
    }

}

function exercise5() {
   
    var txtBoxValue = document.getElementById('txt1');
    const translation = new Map([['a', '4'], ['e', '3'], ['r', '2'], ['i', '1']]);

    text = txtBoxValue.value.toLowerCase();

    for ( var i = 0; i < text.length; i++) {
        if (translation.get(text[i])){
            text = text.replace(text[i], translation.get(text[i]));
        }
    }

    console.log(text);

}