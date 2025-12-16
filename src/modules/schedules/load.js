import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js'
import { hoursLoad } from '../form/hours-load.js'
import { schedulesShow } from './show.js'

const selectedDate = document.getElementById('date')

export async function schedulesDay() {
  const date = selectedDate.value

  // Buscar os agendamentos do dia selecionado
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos na tela
  schedulesShow({ dailySchedules })

  // Renderiza as horas disponíveis
  hoursLoad({ date })
}
