import dayjs from 'dayjs'

import { scheduleNew } from '../../services/schedule-new.js'
import { schedulesDay } from '../schedules/load.js'

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carregra a data atual no campo de data
selectedDate.value = inputToday
// Define que a data mínima selecionável é a data atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    // Recupera os dados do formulário
    const name = clientName.value.trim()

    if (!name) {
      return alert('Por favor, informe o nome do cliente!')
    }

    const hourSelected = document.querySelector('.hour-selected')

    if (!hourSelected) {
      return alert('Por favor, selecione um horário disponível!')
    }

    const [hour, _] = hourSelected.innerText.split(':')

    const when = dayjs(selectedDate.value).add(Number(hour), 'hour')

    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when
    })

    // Recarrega a tela de agendamentos do dia
    await schedulesDay()
    clientName.value = ''
  } catch (error) {
    alert('Não foi possível realizar o agendamento.')
    console.error(error)
  }
}
