alert("JS已載入");

fetch('population_pyramid.csv')
.then(response => response.text())
.then(data => {

const rows = data.trim().split(/\r?\n/).slice(1);

let age = [];
let male = [];
let female = [];

rows.forEach(row => {
    const cols = row.split(',');
    console.log(cols);


    if(cols[0].trim() === '大武鄉'){

    if(cols[2].trim() === '男'){
        age.push(cols[1].trim());
        male.push(parseInt(cols[3]));
    } 
    else if(cols[2].trim() === '女'){
        female.push(parseInt(cols[3]));
    }
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
