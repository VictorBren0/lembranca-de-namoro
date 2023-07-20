// Função para calcular a diferença de meses entre duas datas
function getMonthsDiff(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();
  return yearDiff * 12 + monthDiff;
}

// Função para formatar a data no formato dd/mm/yyyy
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Função para calcular a porcentagem do progresso do mês atual em relação ao próximo aniversário de namoro
function getCurrentMonthProgress(startDate, currentDate) {
  const start = new Date(startDate);
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  // Caso o aniversário de namoro seja no mesmo mês, calculamos a diferença de dias
  // entre a data atual e a data do próximo aniversário de namoro
  let nextAnniversary = new Date(currentYear, start.getMonth(), start.getDate());
  if (currentMonth >= start.getMonth() && currentDay >= start.getDate()) {
    nextAnniversary.setFullYear(currentYear + 1);
  }

  const totalDaysInYear = (nextAnniversary - start) / (1000 * 60 * 60 * 24);
  const daysLeft = (nextAnniversary - currentDate) / (1000 * 60 * 60 * 24);

  return ((totalDaysInYear - daysLeft) / totalDaysInYear) * 100;
}

// Função para atualizar a barra de progresso
function updateProgressBar() {
  const startDate = "2022-11-20"; // Data de início do namoro no formato yyyy-mm-dd
  const currentDate = new Date();
  const totalMonths = getMonthsDiff(startDate, currentDate);
  const progressBar = document.querySelector(".progress");
  const currentMonthProgress = getCurrentMonthProgress(startDate, currentDate);
  const formattedDate = formatDate(currentDate);

  progressBar.style.width = `${currentMonthProgress.toFixed(2)}%`;
  document.getElementById("dateLabel").innerText = `Já estamos juntos há ${Math.floor(totalMonths)} meses. Falta ${currentMonthProgress.toFixed(2)}% do tempo até o aniversário de namoro!`;
}

// Atualiza a barra de progresso ao carregar a página
updateProgressBar();


