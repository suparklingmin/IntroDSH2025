const ctx = document.getElementById('myChart').getContext('2d');

fetch('https://raw.githubusercontent.com/suparklingmin/IntroDSH2025/refs/heads/main/notes/18-20250602/data.json')
.then(response => response.json())
.then(chartData => {
    const chart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true
        }
    })
})