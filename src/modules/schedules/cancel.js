const periods = document.querySelectorAll('.period')

periods.forEach((period) => {
  period.addEventListener('click', (event) => {
    // Verifica se o ícone de cancelamento foi clicado
    if (event.target.classList.contains('cancel-icon')) {
      // Captura o item de agendamento correspondente
      const item = event.target.closest('li')
      const { id } = item.dataset

      if (id) {
        const isConfirmed = confirm('Tem certeza que deseja cancelar este agendamento?')

        if (isConfirmed) {
          // Remove o agendamento da interface
          console.log('Remover')
        }
      }
    }
  })
})
