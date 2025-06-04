let text = "";

const ctx = document.getElementById('myChart')

const chart = new Chart(ctx, {
    "type": "bar",
    "data": {},
    "options": {
        "responsive": true
    }
})

// 단어들의 배열을 받아서 {단어: 빈도} 꼴의 객체를 돌려주는 함수
function count(words, sort=true) {
    const frequency = {};
    words.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1;
    });
    if (sort) {
        return Object.fromEntries(
            Object.entries(frequency).sort(([,a],[,b]) => b - a)
        );
    } else {
        return frequency;
    }
}

// 텍스트를 받아서 {단어: 빈도} 꼴의 객체를 돌려주는 함수
function getWordFreq(text) {
    const words = text.toLowerCase().match(/[\w가-힣]+/g) || [];
    return count(words);
}

// {단어: 빈도} 꼴의 객체를 받아서 chartData 객체를 돌려주는 함수
function getChartData(freq, topn=30) {
    const chartData = {
        "labels": Object.keys(freq).slice(0, topn),
        "datasets": [
            {
                "label": "Frequency",
                "data": Object.values(freq).slice(0, topn)
            }
        ]
    };
    return chartData
}

// 입력창에 텍스트를 입력받아 차트 데이터를 업데이트하는 함수
function updateChart() {
    text = document.getElementById('textInput').value;  // 저장
    chart.data = getChartData(getWordFreq(text));
    chart.update();
}