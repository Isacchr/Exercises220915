
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
    
}