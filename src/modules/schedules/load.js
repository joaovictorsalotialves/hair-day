import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js'
import { hoursLoad } from '../form/hours-load.js'

const selectedDate = document.getElementById('date')

export async function schedulesDay() {
  const date = selectedDate.value

  // Buscar os agendamentos do dia selecionado
  const dailySchedules = await scheduleFetchByDay({ date })
  console.log(dailySchedules)

  // Renderiza as horas disponíveis
  hoursLoad({ date })
}
