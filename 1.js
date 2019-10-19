var dataKey = ["dumb", "ways", "the", "best"];
var word = 'dumbways';

function check(dataKey, word) {
    for (i = 0; i < dataKey.length; i++) {
        var res = word.split(dataKey[i]);
    
        if (res.length == 1) {
            console.log(dataKey[i] + " => false");
        } else {
            console.log(dataKey[i] + " => true");
        }

    }
}

check(dataKey,word)