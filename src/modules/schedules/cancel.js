import { schedulesDay } from './load.js'
import { scheduleCancel } from '../../services/schedule-cancel.js'

const periods = document.querySelectorAll('.period')

periods.forEach((period) => {
  period.addEventListener('click', async (event) => {
    // Verifica se o ícone de cancelamento foi clicado
    if (event.target.classList.contains('cancel-icon')) {
      // Captura o item de agendamento correspondente
      const item = event.target.closest('li')
      const { id } = item.dataset

      if (id) {
        const isConfirmed = confirm('Tem certeza que deseja cancelar este agendamento?')

        console.log(id)
        if (isConfirmed) {
          // Cancela o agendamento e recarrega a lista
          await scheduleCancel({ id })
          schedulesDay()
        }
      }
    }
  })
})
