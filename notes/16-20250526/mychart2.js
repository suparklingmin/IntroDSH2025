// 데이터 준비
const data = [30, 80, 45, 60, 20, 90];

// SVG 요소 생성
const svg = d3.select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 200);

// 막대 그리기
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 60)
    .attr("y", d => 200 - d * 2)
    .attr("width", 50)
    .attr("height", d => d * 2)
    .attr("fill", "steelblue");
