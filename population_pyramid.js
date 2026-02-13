alert("JS已載入");
console.log("ECharts物件:", echarts);

// 直接寫死一組測試資料
let age = ["0-4歲","5-9歲","10-14歲"];
let male = [-71,-89,-79];
let female = [60,99,97];

var chart = echarts.init(document.getElementById('chart'));

chart.setOption({
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'value' },
    yAxis: { type: 'category', data: age },
    series: [
        { name:'男', type:'bar', data: male },
        { name:'女', type:'bar', data: female }
    ]
});
