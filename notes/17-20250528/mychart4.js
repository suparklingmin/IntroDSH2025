// Canvas 요소 가져오기
const ctx = document.getElementById('myChart').getContext('2d');

// 차트 생성
const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '투표 수',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

// Chart.js 이벤트 처리
const chart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        responsive: true,
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const element = elements[0];
                const datasetIndex = element.datasetIndex;
                const index = element.index;
                const value = chart.data.datasets[datasetIndex].data[index];
                const label = chart.data.labels[index];
                
                alert(`클릭된 항목: ${label}, 값: ${value}`);
            }
        },
        onHover: (event, elements) => {
            event.native.target.style.cursor = 
                elements.length > 0 ? 'pointer' : 'default';
        }
    }
});

// 데이터 추가 함수
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

// 데이터 제거 함수
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

// 1초마다 랜덤 데이터 추가
setInterval(() => {
    const randomValue = Math.floor(Math.random() * 100);
    const currentTime = new Date().toLocaleTimeString();
    addData(chart, currentTime, randomValue);
    
    // 데이터가 10개를 초과하면 가장 오래된 것 제거
    if (chart.data.labels.length > 10) {
        removeData(chart);
    }
}, 1000);