import dayjs from 'dayjs'

const form = document.querySelector('form')
const selectDate = document.getElementById('date')

const inputToday = dayjs().format('DD/MM/YYYY')

// Carregra a data atual no campo de data
selectDate.value = inputToday
// Define que a data mínima selecionável é a data atual
selectDate.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault()

  console.log('Formulário enviado!')
}
