const inputPositionNo1 = document.getElementsByClassName('inputPosition')[0]
const inputPositionNo2 = document.getElementsByClassName('inputPosition')[1]

const inputNrTel = document.getElementById('input1')
const inputCode = document.getElementById('input2')

const submitButton = document.querySelector('.getPack')

//dialog window
const dialogWindow = document.getElementById('dialogWindow')

submitButton.disabled = true

let ok_nr_tel = false
let ok_code = false

const validation_nrTel = () => {
    if(inputNrTel.value.length !== 9) {
        console.log(inputNrTel.value.length)
        const validationContent = document.createElement("p")
        validationContent.setAttribute('class', 'validation')
        validationContent.innerHTML = "Błędna długość numeru telefonu"
        inputPositionNo1.appendChild(validationContent)
        return false
    }
    ok_nr_tel = true
    return true
}

const validation_code = () => {
    if(inputCode.value.length !== 4) {
        console.log('źle')
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

inputNrTel.addEventListener('change', () => {
    console.log('input zmienia wartość')
    validation_nrTel()
    enableGetPackButton()
})

inputCode.addEventListener('change', () => {
    validation_code()
    enableGetPackButton()
})

submitButton.addEventListener('click', () => {
    dialogWindow.style['display'] = 'block'
})

