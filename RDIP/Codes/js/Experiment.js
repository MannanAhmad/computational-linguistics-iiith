let selection = document.getElementById("choose-lang");
$("#hide").hide()
$("#hide1").hide()

let startVal, updateVal;
let k;




let valueToBeDisplay = "";
function butnDisplay(id, value) {
    
    document.getElementById("dis2").innerHTML = "Formed Sentence (after selecting words):";
    valueToBeDisplay += value + " ";
    document.getElementById("dis3").innerHTML = valueToBeDisplay;
    $("#hide").show()
    document.getElementById(id).style.display = "none";
    startVal ++; 
    if(startVal == updateVal){
        // alert("run")
        $("#hide1").show()
    }
    
}

function randomizeValue(data) {
    var mix = data.split(" ");
    var i = mix.length, temp, index;
    while (0 !== i) {
        index = Math.floor(Math.random() * i);
        i--;
        temp = mix[i];
        mix[i] = mix[index];
        mix[index] = temp;
    }
    return mix;
}

run = function () {

    // For English language
    if (selection.value === "eng") {
        let firstEnglishSentence = ['John ate an apple before afternoon',
            'before afternoon John ate an apple',
            'John before afternoon ate an apple'
        ];
        let secondEnglishSentence = ['some students like to study in the night',
            'at night some students like to study'
        ];
        let thirdEnglishSentence = ['John and Mary went to church',
            'Mary and John went to church'
        ];
        let fourthEnglishSentence = ['John went to church after eating',
            'after eating John went to church',
            'John after eating went to church'
        ];
        let fifthEnglishSentence = ['did he go to market',
            'he did go to market'
        ];
        let sixEnglishSentence = ['the woman who called my sister sells cosmetics',
            'the woman who sells cosmetics called my sister',
            'my sister who sells cosmetics called the woman',
            'my sister who called the woman sells cosmetics'
        ];
        let seventhEnglishSentence = ['John goes to the library and studies',
            'John studies and goes to the library'
        ];
        let eightEnglishSentence = ['John ate an apple so did she',
            'she ate an apple so did John'
        ];
        let ninethEnglishSentence = ['the teacher returned the book after she noticed the error',
            'the teacher noticed the error after she returned the book',
            'after the teacher returned the book she noticed the error',
            'after the teacher noticed the error she returned the book',
            'she returned the book after the teacher noticed the error',
            'she noticed the error after the teacher returned the book',
            'after she returned the book the teacher noticed the error',
            'after she noticed the error the teacher returned the book'
        ];
        let tenthEnglishSentence = ['I told her that I bought a book yesterday',
            'I told her yesterday that I bought a book',
            'yesterday I told her that I bought a book',
            'I bought a book that I told her yesterday',
            'I bought a book yesterday that I told her',
            'yesterday I bought a book that I told her'
        ];

        // Creating nested array

        let englishArray = [firstEnglishSentence, secondEnglishSentence, thirdEnglishSentence, fourthEnglishSentence,
            fifthEnglishSentence, sixEnglishSentence, seventhEnglishSentence, eightEnglishSentence, ninethEnglishSentence, tenthEnglishSentence];

        //Genrating randome array form nested array

        document.getElementById("dis1").innerHTML = "(select the buttons in proper order)"
        document.getElementById("dis").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"

        // Randomizing words of Sentence 
        let changeWords = Math.floor(Math.random() * englishArray.length)

        // console.log(changeWords)


        document.getElementById("dis2").innerHTML = " "
        document.getElementById("dis3").innerHTML = " "
        valueToBeDisplay = "";
        $("#hide").hide()
        $("#hide1").hide()


        // convert words of sentence into buttons for English sentence



        let gettingValue = englishArray[changeWords][0];
        k = randomizeValue(gettingValue);
        startVal = 0
        updateVal = 0
        let n = "";
        for (i = 0; i <= k.length - 1; i++) {
            val = k[i];
            let m = "<button style= 'font-size:20px ; padding:8px ; margin-right:6px ' id='btn1" + i + "' onclick='butnDisplay(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
            n += m;
            updateVal++
        }
        document.getElementById("val").innerHTML = n

    }

    // For Hindi language

    else if (selection.value === "hnd") {

        let firstHindiSentence = ['राम और श्याम बाजार गयें',
            'राम और श्याम गयें बाजार',
            'बाजार गयें राम और श्याम',
            'गयें बाजार राम और श्याम'

        ];
        let secondHindiSentence = ['राम सोया और श्याम भी',
            'श्याम सोया और राम भी',
            'सोया श्याम और राम भी',
            'सोया राम और श्याम भी'
        ];
        let thirdHindiSentence = ['मैंने उसे बताया कि राम सो रहा है',
            'मैंने उसे बताया कि सो रहा है राम',
            'उसे मैंने बताया कि राम सो रहा है',
            'उसे मैंने बताया कि सो रहा है राम',
            'मैंने बताया उसे कि राम सो रहा है',
            'मैंने बताया उसे कि सो रहा है राम',
            'उसे बताया मैंने कि राम सो रहा है',
            'उसे बताया मैंने कि सो रहा है राम',
            'बताया मैंने उसे कि राम सो रहा है',
            'बताया मैंने उसे कि सो रहा है राम',
            'बताया उसे मैंने कि राम सो रहा है',
            'बताया उसे मैंने कि सो रहा है राम'
        ];
        let fourthHindiSentence = ['राम खाकर सोया',
            'खाकर राम सोया',
            'राम सोया खाकर',
            'खाकर सोया राम',
            'सोया राम खाकर',
            'सोया खाकर राम'
        ];
        let fifthHindiSentence = ['बिल्लियों को मारकर कुत्ता सो गया	',
            'मारकर बिल्लियों को कुत्ता सो गया',
            'बिल्लियों को मारकर सो गया कुत्ता',
            'मारकर बिल्लियों को सो गया कुत्ता',
            'कुत्ता सो गया बिल्लियों को मारकर',
            'कुत्ता सो गया मारकर बिल्लियों को',
            'सो गया कुत्ता बिल्लियों को मारकर',
            'सो गया कुत्ता मारकर बिल्लियों को'
        ];
        let sixHindiSentence = ['एक लाल किताब वहाँ है',
            'एक लाल किताब है वहाँ',
            'वहाँ है एक लाल किताब',
            'है वहाँ एक लाल किताब'
        ];
        let seventhHindiSentence = ['एक बड़ी सी किताब वहाँ है',
            'एक बड़ी सी किताब है वहाँ',
            'बड़ी सी एक किताब वहाँ है',
            'बड़ी सी एक किताब है वहाँ',
            'वहाँ है एक बड़ी सी किताब',
            'वहाँ है बड़ी सी एक किताब',
            'है वहाँ एक बड़ी सी किताब',
            'है वहाँ बड़ी सी एक किताब'
        ];

        // Creating nested array of hindi sentences

        let hindiArray = [firstHindiSentence, secondHindiSentence, thirdHindiSentence, fourthHindiSentence,
            fifthHindiSentence, sixHindiSentence, seventhHindiSentence];

        //Genrating randome array of hindi sentences form nested array


        document.getElementById("dis1").innerHTML = "(select the buttons in proper order)"
        document.getElementById("dis").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"

        // Randomizing words of sentence from list of hindi sentence

        var randomizeWords = Math.floor(Math.random() * hindiArray.length)

        // console.log(randomizeWords)

        document.getElementById("dis2").innerHTML = " "
        document.getElementById("dis3").innerHTML = " "
        valueToBeDisplay = "";
        $("#hide").hide()
        $("#hide1").hide()
        // Converting words into buttons of hindi sentence
        let gettingValue = hindiArray[randomizeWords][0];
        k = randomizeValue(gettingValue);
        startVal = 0
        updateVal = 0
        let n = "";

        for (i = 0; i <= k.length - 1; i++) {
            val = k[i];
            let m = "  <button style= 'font-size:20px ; padding:8px ; margin-right:6px ' id='btn1" + i + "' onclick='butnDisplay(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
            n += m;
            updateVal++
        }
        document.getElementById("val").innerHTML = n

    } else {
        document.getElementById("dis1").innerHTML = ""
        document.getElementById("dis").innerHTML = ""
        document.getElementById("val").innerHTML = ""
        document.getElementById("dis2").innerHTML = ""
        document.getElementById("dis3").innerHTML = ""
        $("#hide").hide()
        $("#hide1").hide()
        alert("Choose any language")
    }
}


//functionality of reset button

function reset() {

    for (i = 0; i <= k.length - 1; i++) {
        document.getElementById('btn1' + i).style.display = "";
    }
    document.getElementById("dis2").innerHTML = ""
    document.getElementById("dis3").innerHTML = ""
    valueToBeDisplay = ""
    startVal = 0
    $("#hide1").hide()
}