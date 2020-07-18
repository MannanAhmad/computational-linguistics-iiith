let englishSentences = ["The child liked the chocolate",
    "She was stopped by the bravest knight",
    "Mary baked a cake for his birthday",
    "She decorated the cake carefully",
    "Mary wore a dress with polka dots"
]

let hindiSentences = ["राम ने सीता के लिए फल तोड़ा",
    "छोटे बच्चे पाठशाला जल्दी आयेंगे",
    "मेहनत का फल मीठा होता है",
    "वाह! वह खूबसूरत है",
    "पेड़ से पत्ते गिर गए"
]


$("#english").hide()
$("#hindi").hide()
document.getElementById("msg").innerHTML = ""
document.getElementById("tbl").innerHTML = " "

let selectLng = document.getElementById("choose-lang")
function selectLanguage() {
    if (selectLng.value === "eng") {
        $("#hindi").hide()
        $("#english").show()
        document.getElementById("msg").innerHTML = ""
        document.getElementById("tbl").innerHTML = " "
        document.getElementById("english").value = "default"
        document.getElementById("hindi").value = "default"
    }
    else if (selectLng.value === "hnd") {
        $("#english").hide()
        $("#hindi").show()
        document.getElementById("msg").innerHTML = ""
        document.getElementById("tbl").innerHTML = " "
        document.getElementById("english").value = "default"
        document.getElementById("hindi").value = "default"
    }
    else {
        alert("Select Language")
        $("#english").hide()
        $("#hindi").hide()
        document.getElementById("msg").innerHTML = ""
        document.getElementById("tbl").innerHTML = " "
        document.getElementById("english").value = "default"
        document.getElementById("hindi").value = "default"
    }
}


function selectSentence(){
    document.getElementById("msg").innerHTML = "Select the POS tag for corresponding words"
    if(selectLng.value === "eng"){
        let engSent = document.getElementById("english").value
        if(engSent == "firstEng"){
            showValueInTable(englishSentences[0])
            console.log(englishSentences[0])
        }
        if(engSent == "secondEng"){
            showValueInTable(englishSentences[1])
            console.log(englishSentences[1])
        }
        if(engSent == "thirdEng"){
            showValueInTable(englishSentences[2])
            console.log(englishSentences[2])
        }
        if(engSent == "fourthEng"){
            showValueInTable(englishSentences[3])
            console.log(englishSentences[3])
        }
        if(engSent == "fifthEng"){
            showValueInTable(englishSentences[4])
            console.log(englishSentences[4])
        }
        if(engSent =="default"){
            alert("Select a sentence")
            document.getElementById("msg").innerHTML = ""
        }
    }
    else if(selectLng.value === "hnd"){
        
        let hndSent = document.getElementById("hindi").value
        if(hndSent == "firstHnd"){
            showValueInTable(hindiSentences[0])
            console.log(hindiSentences[0])
        }
        if(hndSent == "secondHnd"){
            showValueInTable(hindiSentences[1])
            console.log(hindiSentences[1])
        }
        if(hndSent == "thirdHnd"){
            showValueInTable(hindiSentences[2])
            console.log(hindiSentences[2])
        }
        if(hndSent == "fourthHnd"){
            showValueInTable(hindiSentences[3])
            console.log(hindiSentences[3])
        }
        if(hndSent == "fifthHnd"){
            showValueInTable(hindiSentences[4])
            console.log(hindiSentences[4])
        }
        if(hndSent =="default"){
            alert("Select a sentence")
            document.getElementById("msg").innerHTML = ""
            document.getElementById("tbl").innerHTML = " "
        }
    }
    
}

let createRowsInTable = ""
let splitSen = ""
function showValueInTable(sentence){
    document.getElementById("tbl").innerHTML = " "
    splitSen = sentence.split(" ")
    if(selectLng.value === "eng")
	{	createRowsInTable = ""
		for(i = 0 ; i<splitSen.length ; i++){
           createRowsInTable += "<tr><td>"+splitSen[i]+"</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Determiner'>Determiner</option><option value = 'Preposition'>Preposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
		}
	}
	else if(selectLng.value === "hnd")
	{	createRowsInTable = ""
		for(i = 0 ; i<splitSen.length ; i++){
            createRowsInTable += "<tr><td>"+splitSen[i]+"</td><td><select id='dropdowns'><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Postposition'>Postposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
		}
	}
    document.getElementById("tbl").innerHTML = "<tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr><tr></td></tr>" + createRowsInTable 
    
}

