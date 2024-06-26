
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


function BycycleWidget() {
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
                title: 'Bike Time by Age Group',
                curveType: 'function', // Add this line
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

            // Instantiate and draw the chart
            var chart = new google.charts.Bar(document.getElementById('top_x_div1'));
            // Convert the Classic options to Material options.
            chart.draw(chartData, google.charts.Bar.convertOptions(options));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

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
            title: 'Year',
          side: 'bottom',
          format: '0',
        },
        vAxis: {
            title: 'Average Age',
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


function StudentAgeWidget() {
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
                title: 'Average Age of Students by Year',
                curveType: 'function', // Add this line
                chartArea: { width: '70%', height: '70%' },
                hAxis: {
                    title: 'Date',
                    format: '0'
                },
                vAxes: {
                    0: { title: 'Average Age' }
                },
                series: {
                    0: { targetAxisIndex: 0 },
                    1: { targetAxisIndex: 1 }
                },
                explorer: { axis: 'horizontal' }
            };

            // Instantiate and draw the chart
            var chart = new google.charts.Line(document.getElementById('line_top_x1'));
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

function StudyWidget() {
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
            var table = new google.visualization.Table(document.getElementById('table_div1'));
            table.draw(tableData, { showRowNumber: true, width: '100%', height: '100%' });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function showSchoolOccupation() {
  // Fetch data from the server
  fetch('http://localhost:8081/require/classOccupancy/all')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
          var chartData = new google.visualization.DataTable();
          chartData.addColumn('string', 'Room Number');
          chartData.addColumn('number', 'Number of Students');

          // Assuming data is an array of objects with 'room_number' and 'number_of_students' properties
          data.forEach(entry => {
              chartData.addRow([entry.room_number, parseInt(entry.number_of_students)]);
          });

          var options = {
              title: 'School Occupation by Room Number',
              chartArea: { width: '70%', height: '70%' },
              hAxis: {
                  title: 'Room Number',
                  format: '0'
              },
              vAxis: {
                  title: 'Number of Students'
              },
              explorer: { axis: 'horizontal' }
          };

          var chart = new google.visualization.ColumnChart(document.getElementById('school_occupation'));
          chart.draw(chartData, options);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}



function showSchoolOccupationWidget() {
    // Fetch data from the server
    fetch('http://localhost:8081/require/classOccupancy/all')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            var chartData = new google.visualization.DataTable();
            chartData.addColumn('string', 'Room Number');
            chartData.addColumn('number', 'Number of Students');

            // Assuming data is an array of objects with 'room_number' and 'number_of_students' properties
            data.forEach(entry => {
                chartData.addRow([entry.room_number, parseInt(entry.number_of_students)]);
            });

            var options = {
                title: 'School Occupation by Room Number',
                chartArea: { width: '70%', height: '70%' },
                hAxis: {
                    title: 'Room Number'
                },
                vAxis: {
                    title: 'Number of Students'
                },
                explorer: { axis: 'horizontal' }
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('school_occupation1'));
            chart.draw(chartData, options);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function airQuality() {
  fetch('http://localhost:8081/require/AirQuality/all')
      .then(response => response.json())
      .then(data => {
        var chartData = new google.visualization.DataTable();
        chartData.addColumn('string', 'Date');
        chartData.addColumn('number', 'Temperature');
        chartData.addColumn('number', 'Humidity');

        data.forEach(entry => {
          chartData.addRow([entry.date, parseInt(entry.temperature), parseInt(entry.humidity)]);
        });

        var options = {
          title: 'Temperature and Humidity in Dublin',
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

function airQualityWidget() {
    fetch('http://localhost:8081/require/AirQuality/all')
        .then(response => response.json())
        .then(data => {
            var chartData = new google.visualization.DataTable();
            chartData.addColumn('string', 'Date');
            chartData.addColumn('number', 'Temperature');
            chartData.addColumn('number', 'Humidity');

            data.forEach(entry => {
                chartData.addRow([entry.date, parseInt(entry.temperature), parseInt(entry.humidity)]);
            });

            var options = {
                title: 'Temperature and Humidity in Dublin',
                chartArea: { width: '70%', height: '70%' },
                hAxis: {
                    title: 'Date',
                    format: '0'
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

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart1'));
            chart.draw(chartData, options);
        });
}
