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

function Bycycle() {
  // Fetch data from the server
  fetch('http://localhost:8081/require/BikeTime/all')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Prepare the data for the chart
      var chartData = new google.visualization.DataTable();
      chartData.addColumn('string', 'Age Group');
      chartData.addColumn('number', 'Percentage');

      // data is an array of objects with 'age_group' and 'value' properties
      data.forEach(entry => {
        chartData.addRow([entry.age_group, parseInt(entry.value)]);
      });

      // Define chart options
      var options = {
        width: 320,
        legend: { position: 'none' },
        axes: {
          x: {
            0: { side: 'bottom', label: 'Age Group' }
          },
          y: {
            0: { side: 'top', label: 'Percentage' }
          }
        },
        bar: { groupWidth: "40%" },
      };

      // Instantiate and draw the chart
      var chart = new google.charts.Bar(document.getElementById('top_x_div'));
      // Convert the Classic options to Material options.
      chart.draw(chartData, google.charts.Bar.convertOptions(options));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}


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

function StudentAge() {
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

function Study() {
  // Fetch data from the server
  fetch('http://localhost:8081/require/StudentStudy/all')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Prepare the data for the chart
      var tableData = new google.visualization.DataTable();
      tableData.addColumn('string', 'Gender');
      tableData.addColumn('string', 'Race/Ethnicity');
      tableData.addColumn('string', 'Parental Level of Education');
      tableData.addColumn('string', 'Lunch');
      tableData.addColumn('string', 'Test Preparation Course');
      tableData.addColumn('number', 'Math Score');
      tableData.addColumn('number', 'Reading Score');
      tableData.addColumn('number', 'Writing Score');

      // Assuming data is an array of objects with respective properties
      data.forEach(entry => {
        tableData.addRow([
          entry.gender,
          entry.race_ethnicity,
          entry.parental_level_of_education,
          entry.lunch,
          entry.test_preparation_course,
          parseInt(entry.math_score),
          parseInt(entry.reading_score),
          parseInt(entry.writing_score)
        ]);
      });

      // Instantiate and draw the table chart
      var table = new google.visualization.Table(document.getElementById('table_div'));
      table.draw(tableData, { showRowNumber: true, width: '100%', height: '100%' });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}


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
