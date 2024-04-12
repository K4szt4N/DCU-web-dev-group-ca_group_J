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

// function drawChart5() {

//   var data = new google.visualization.DataTable();
//   data.addColumn('number', 'Day');
//   data.addColumn('number', 'Guardians of the Galaxy');
//   data.addColumn('number', 'The Avengers');
//   data.addColumn('number', 'Transformers: Age of Extinction');

//   data.addRows([
//     [1, 37.8, 80.8, 41.8],
//     [2, 30.9, 69.5, 32.4],
//     [3, 25.4, 57, 25.7],
//     [4, 11.7, 18.8, 10.5],
//     [5, 11.9, 17.6, 10.4],
//     [6, 8.8, 13.6, 7.7],
//     [7, 7.6, 12.3, 9.6],
//     [8, 12.3, 29.2, 10.6],
//     [9, 16.9, 42.9, 14.8],
//     [10, 12.8, 30.9, 11.6],
//     [11, 5.3, 7.9, 4.7],
//     [12, 6.6, 8.4, 5.2],
//     [13, 4.8, 6.3, 3.6],
//     [14, 4.2, 6.2, 3.4]
//   ]);

//   var options = {
//     chart: {
//       title: 'Box Office Earnings in First Two Weeks of Opening',
//       subtitle: 'in millions of dollars (USD)'
//     },
//     width: 620,
//     height: 300,
//     axes: {
//       x: {
//         0: { side: 'top' }
//       }
//     }
//   };

//   var chart = new google.charts.Line(document.getElementById('line_top_x'));

//   chart.draw(data, google.charts.Line.convertOptions(options));
// };

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

function drawChart7() {
  var data = google.visualization.arrayToDataTable([
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000]
  ]);

  var options = {
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: 'City'
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('barchart_values'));
  chart.draw(data, options);
}

function drawChart8() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
