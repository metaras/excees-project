// ลิ้ง location
let ln =document.getElementById("location_name");
var location_name = sessionStorage.getItem("location_name");
ln.innerText = location_name;


window.onload = function(){
    var in_avg = 0
    var out_avg = 0
    var time_range = 0
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    fetch("https://exceed15.cpsk-club.xyz", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }).then((data) => data.json())
      .then((datas) => {
        datas.forEach((each) => {
            in_avg = each.in_avg
            out_avg = each.out_avg
            time_range = each.time_range
            // call bar graph function
        });
    })
    function drawChart() {

    var data = google.visualization.arrayToDataTable([
    ['Category', 'Numbers', { role: 'style' }],
    ['A', in_avg, '#5382bc'],
    ['B', out_avg, '#5382bc'],
    ['C', time_range, '#5382bc']
    ]);

    var options = {
    legend: { position: 'bottom', textStyle: {fontSize: 16}, },
    backgroundColor: "#faf3e3",
    title: 'Bar Chart',
    fontSize: 30,
    fontFamily: "Nanum Gothic Coding",
    colors: ['#5382bc']
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart'));

    chart.draw(data, options);
    }
}


window.onload = function(){
    var pass = null
    var not_pass = null
    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    fetch("http://158.108.182.17:2255/get_temp_A", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => response.json())
      .then((data) => {
            pass = data.pass
            not_pass = data.not_pass
            // call pie chart function
      });

    function drawChart() {

    var data = google.visualization.arrayToDataTable([
    ['Category', 'Percentage'],
    ['PASS', pass],
    ['NOT PASS', not_pass]
    ]);

    var options = {
    // pieSliceBorderColor: '#000',
    legend: { position: 'bottom', textStyle: {fontSize: 25}, },
    backgroundColor: "#e9d5ae",
    title: 'Percentage',
    fontSize: 30,
    fontName: 'Nanum Gothic Coding',
    slices: [{color: '#4dd77f',offset:0},{color: '#f62f2f',offset:0.1}]
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
    }
}