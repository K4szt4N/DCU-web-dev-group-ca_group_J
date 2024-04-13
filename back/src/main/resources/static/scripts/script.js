function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['My all', 100],
  ]);

  var options = {
    pieHole: 0.5,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'bottom'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
  chart.draw(data, options);
}

function drawChart2() {
  var data = new google.visualization.arrayToDataTable([
    ['Move', 'Percentage'],
    ["King's pawn (e4)", 44],
    ["Queen's pawn (d4)", 31],
    ["Knight to King 3 (Nf3)", 12],
    ["Queen's bishop pawn (c4)", 10],
    ['Other', 3]
  ]);

  var options = {
    width: 320,
    legend: { position: 'none' },
    chart: {
      title: 'Chess opening moves',
      subtitle: 'popularity by percentage'
    },
    axes: {
      x: {
        0: { side: 'top', label: 'White to move' } // Top x-axis.
      }
    },
    bar: { groupWidth: "30%" }
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  var options = {
    title: 'My Daily Activities',
    pieHole: 0.35,
    legend: 'bottom'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
};

function drawChart4() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  var options = {
    title: 'My Daily Activities',
    is3D: true,
    legend: 'bottom'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
};

function drawChart5() {
  // Fetch data from the Java server
  fetch('http://localhost:8081/require/StudentAge/all')
    .then(response => response.json())
    .then(data => {
      // Create a DataTable and add columns
      var chartData = new google.visualization.DataTable();
      chartData.addColumn('number', 'Year');
      chartData.addColumn('number', 'Average Age');

      // Add rows from the fetched data
      data.forEach(entry => {
        chartData.addRow([parseInt(entry.year), parseFloat(entry.average_age)]);
      });

      // Define chart options
      var options = {
        width: 620,
        height: 300,
        hAxis: {
          side: 'bottom',
          format: '0',
        },
        vAxis: {
          side: 'top',
          format: 'decimal',
        }
      };

      // Instantiate and draw the chart
      var chart = new google.charts.Line(document.getElementById('line_top_x'));
      chart.draw(chartData, google.charts.Line.convertOptions(options));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function drawChart6() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ]);

  var options = {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
};

function showSchoolOccupation() {
    fetch('http://localhost:8081/require/classOccupacy/all').then(response => response.json()).then(data => {
        console.table(data);
        var chartData = new google.visualization.DataTable();
        chartData.addColumn('string', 'Class');
        chartData.addColumn('number', 'Students');

        data.forEach(entry => {
            chartData.addRow([entry.class, parseInt(entry.students)]);
        });

        var options = {
            title: 'School Occupation',
            chartArea: { width: '70%', height: '70%' },
            hAxis: {
                title: 'Class'
            },
            vAxis: {
                title: 'Students'
            },
            explorer: { axis: 'horizontal' }
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('school_occupation'));
        chart.draw(chartData, options);
    }
    );
}

function airQuality() {
  fetch('http://localhost:8081/require/AirQuality/all')
      .then(response => response.json())
      .then(data => {
        console.table(data);
        var chartData = new google.visualization.DataTable();
        chartData.addColumn('string', 'Date');
        chartData.addColumn('number', 'Temperature');
        chartData.addColumn('number', 'Humidity');

        data.forEach(entry => {
          chartData.addRow([entry.date, parseInt(entry.temperature), parseInt(entry.humidity)]);
        });

        var options = {
          title: 'Air Quality Index in Dublin',
          chartArea: { width: '70%', height: '70%' },
          hAxis: {
            title: 'Date'
          },
          vAxes: [
            { title: 'Temperature' },
            { title: 'Humidity' }
          ],
          series: {
            0: { targetAxisIndex: 0 },
            1: { targetAxisIndex: 1 }
          },
          explorer: { axis: 'horizontal' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(chartData, options);
      });
}
