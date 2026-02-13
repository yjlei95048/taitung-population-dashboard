window.addEventListener("DOMContentLoaded", function() {

    fetch('population_pyramid.json')
    .then(response => response.json())
    .then(data => {

        let age = [];
        let male = [];
        let female = [];

        data.forEach(item => {

            if(item.鄉鎮市 === '大武鄉'){

                if(item.性別 === '男'){
                    age.push(item.年齡層);
                    male.push(item.人口數);
                }
                else if(item.性別 === '女'){
                    female.push(item.人口數);
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

});
