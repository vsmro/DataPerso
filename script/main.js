//Display complete
function displayComplete() {
    let div = document.getElementById('hidediv');
    div.classList.remove('hide');
  }
//Display minim
function displayMinim() {
    let div = document.getElementById('hidediv');
    div.classList.add('hide');
}

//Dispaly today date
function currentDate() {
    let date = new Date()
    console.log(date);
    document.getElementById("date").innerHTML = date;
}

//Save Identitate to Local Storage

function saveIdentitate () {
    let nume, prenume ,cardid , varsta

    nume = document.getElementById('nume').value
    prenume = document.getElementById('prenume').value
    cardid = document.getElementById('cardid').value
    varsta = document.getElementById('varsta').value

    if(nume=="" || prenume=="" || cardid=="" || varsta=="") {
        alert('Formularul nu este complet')
    
    } else {
        window.localStorage.setItem("Nume", nume)
        window.localStorage.setItem("Prenume", prenume)
        window.localStorage.setItem("CardId", cardid)
        window.localStorage.setItem("Varsta", varsta)
    }
}



