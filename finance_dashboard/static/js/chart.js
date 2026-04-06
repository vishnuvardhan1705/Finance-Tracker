const ctx = document.getElementById('financeChart').getContext('2d');

const financePieChart = new Chart(ctx, {
    type:'pie',
    data: {
        labels: ['Accomodation', 'Shopping', 'Food', 'Entertainment','Other'],
        datasets: [{
            data: [9000, 4000, 5000, 2000,1000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(248, 131, 111, 0.6)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});

const transactions = [
  { date: "2026-03-01", amount: 5000, type: "income" },
  { date: "2026-03-02", amount: 1500, type: "expense" },
  { date: "2026-03-05", amount: 1000, type: "income" },
  { date: "2026-03-06", amount: 300, type: "expense" },
  { date: "2026-03-06", amount: 400, type: "expense" },
  { date: "2026-03-06", amount: 800, type: "income" },
  { date: "2026-03-06", amount: 700, type: "income" },
  { date: "2026-03-06", amount: 500, type: "expense" }
];

function getBalanceTrend(transactions) {
  // Sort by date
  transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

  let balance = 0;
  const labels = [];
  const data = [];

  transactions.forEach(t => {
    if (t.type === "income") balance += t.amount;
    else balance -= t.amount;

    labels.push(t.date);
    data.push(balance);
  });

  return { labels, data };
}

const { labels, data } = getBalanceTrend(transactions);

const ct = document.getElementById("balanceChart").getContext("2d");

new Chart(ct, {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "Balance",
      data: data,
      borderColor: "#f3b76a",
      backgroundColor: "rgba(155, 124, 93, 0.2)",
      tension: 0.5,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

