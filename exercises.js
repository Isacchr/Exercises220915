
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

    let obj = {};

        for(var i = 0; i < words.length; i++) {
            if (obj[words[i]] == undefined) {
                obj[words[i]] = 1;
            } else {
                obj[words[i]]++;
            }
        }

        Object.values(obj).forEach((freq, word) => console.log(`${words[word]} ${freq}`));

}