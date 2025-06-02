const ctx = document.getElementById('myChart').getContext('2d');

fetch('./data.json')
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