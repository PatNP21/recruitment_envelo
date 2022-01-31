//author: Patryk Najda

const inputPositionNo1 = document.getElementsByClassName('inputPosition')[0]
const inputPositionNo2 = document.getElementsByClassName('inputPosition')[1]

const inputNrTel = document.getElementById('input1')
const inputCode = document.getElementById('input2')

//buttons
const submitButton = document.querySelector('.getPack')
const thatsAll = document.querySelector('.thatsAll')
const getAntoherPack = document.querySelector('.getAnotherPack')

//dialog window
const dialogWindow = document.getElementById('dialogWindow')

submitButton.disabled = true //wstępnie przycisk nie może być obsługiwany, ponieważ najpierw wartości inputów muszą spełnić określone wymagania

let ok_nr_tel = false //sprawdzenie, czy wartość inputa dla numeru telefonu spełnia wymagania 
let ok_code = false //sprawdzenie, czy wartość inputa dla kodu spełnia wymagania 

const validation_nrTel = () => {
    if(inputNrTel.value.length !== 9) { //instrukcja warunkowa sprawdzająca
        const validationContent = document.createElement("p") //utworzenie nowego elementu o znaczniku 'p' - paragraph
        validationContent.setAttribute('class', 'validation') //ustawienie atrybutu klasy dla utworzonego elemrntu
        validationContent.innerHTML = "Błędna długość numeru telefonu" //określenie wartości wewnątrz elementu
        inputPositionNo1.appendChild(validationContent) //dodanie elementu do wskazanego elementu pobranego z DOM
        return false // w tym przypadku funkcja zwraca false, czyli nie wykona pewnej funkcji
    }
    ok_nr_tel = true //wartość inputu spełnia warunki, zmieniamy zatem wartość z false na true
    return true //zwraca true kiedy wszystko jest w porządku
}

const validation_code = () => {
    if(inputCode.value.length !== 4) { //jak w przypadku funkcji wyżej
        const validationContent = document.createElement("p")
        validationContent.setAttribute('class', 'validation')
        validationContent.innerHTML = "Błędna długość kodu"
        inputPositionNo2.appendChild(validationContent)
        return false
    }
    ok_code = true
    return true
}

const enableGetPackButton = () => {
    if(ok_nr_tel && ok_code) {
        submitButton.disabled = false
        ok_code = true
    }
}

const showDialog = () => {
    dialogWindow.style['display'] = 'block'
}

inputNrTel.addEventListener('change', () => { //wprowadzenie zmian do inputu dla numeru telefonu 
    console.log('input zmienia wartość')
    validation_nrTel()
    enableGetPackButton()
})

inputCode.addEventListener('change', () => { //wprowadzenie zmian do inputu dla kodu
    validation_code() //wywołanie funkcji validation_code w celu walidacji pola dla kodu
    enableGetPackButton() //wywołanie funkcji ułatwiającej dostęp do przycisku, jeśli oba inputy przejdą walidację
})

submitButton.addEventListener('click', () => { //naciśnięcie przycisku odpowiadającego za odebranie paczki
    localStorage.setItem('numerTelefonu', inputNrTel.value) //zapisanie wartości 'numer telefonu' w pamięci lokalnej przeglądarki
    localStorage.setItem('kod', inputCode.value) //zapisanie wartości 'kod' w pamięci lokalnej przeglądarki
    setTimeout(showDialog, 1000) //wyświetlenie okna dialogowego
})

thatsAll.addEventListener('click', () => { // 'wszystko na dzis', naciśnięie przycisku wywołuje zniknięcie okna dialogowego
    dialogWindow.style['display'] = 'none' //ukrywanie okna dialogowego
})

getAntoherPack.addEventListener('click', () => { //naciśnięcie przycisku "Odbierz kolejną paczkę"
    dialogWindow.style['display'] = 'none' //ukrywanie okna dialogowego
    localStorage.clear() //czyszczenie localStorage
    inputNrTel.value = '' //czyszczenie inputu do wpisywania numeru telefonu
    inputCode.value = '' //czyszczenie inputu do wpisywania kodu
})

