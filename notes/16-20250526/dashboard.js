// 샘플 데이터
const salesData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [{
        label: '매출액 (백만원)',
        data: [120, 150, 180, 200, 160, 220],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: true
    }]
};

const categoryData = {
    labels: ['전자제품', '의류', '식품', '도서', '기타'],
    datasets: [{
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
        ]
    }]
};

// 차트 생성
const salesChart = new Chart(document.getElementById('salesChart'), {
    type: 'line',
    data: salesData,
    options: {
        responsive: true,
        plugins: {
            title: { display: true, text: '월별 매출 현황' }
        }
    }
});

const categoryChart = new Chart(document.getElementById('categoryChart'), {
    type: 'doughnut',
    data: categoryData,
    options: {
        responsive: true,
        plugins: {
            title: { display: true, text: '카테고리별 매출 비중' }
        }
    }
});