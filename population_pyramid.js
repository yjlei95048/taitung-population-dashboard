fetch('population_pyramid.csv')
.then(response => response.text())
.then(data => {

const rows = data.split('\n').slice(1);
const filtered = rows.filter(r => r.includes('臺東市'));

let age = [];
let male = [];
let female = [];

filtered.forEach(row => {
    const cols = row.split(',');
    age.push(cols[1]);
    if(cols[2] === '男'){
        male.push(parseInt(cols[3]));
    } else {
        female.push(parseInt(cols[3]));
    }
});

var chart = echarts.init(document.getElementById('chart'));

chart.setOption({
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'value' },
    yAxis: { type: 'category', data: age.reverse() },
    series: [
        { name:'男', type:'bar', data: male.reverse() },
        { name:'女', type:'bar', data: female.reverse() }
    ]
});

});
