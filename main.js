var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sindel', 'John', 'Nate', 'Gloria', 'Pearl'],
        datasets: [{
            label: 'A bar chart of the scores of 5 students',
            data: [150, 145, 153, 167, 129, 130],
            backgroundColor: [
                'rgba(25, 99, 13, 0.2)',
                'rgba(54, 12, 23, 0.2)',
                'rgba(25, 26, 186, 0.2)',
                'rgba(75, 12, 19, 0.2)',
                'rgba(15, 12, 25, 0.2)'
            ],
            borderColor: [
                'rgba(255, 9, 2, 1)',
                'rgba(54, 2, 5, 1)',
                'rgba(255, 6, 86, 1)',
                'rgba(75, 2, 2, 1)',
                'rgba(153, 2, 5, 1)'
            ],
            borderWidth: 1,
            lineTension: .01,
            fill: false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    // type: 'line',
    // data: {
    //     datasets: [{
    //         data: [20, 50, 100, 75, 25, 0],
    //         label: 'Left dataset',

    //         // This binds the dataset to the left y axis
    //         yAxisID: 'left-y-axis'
    //     }, {
    //         data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],
    //         label: 'Right dataset',

    //         // This binds the dataset to the right y axis
    //         yAxisID: 'right-y-axis'
    //     }],
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    // },
    // options: {
    //     scales: {
    //         yAxes: [{
    //             id: 'left-y-axis',
    //             type: 'linear',
    //             position: 'left'
    //         }, {
    //             id: 'right-y-axis',
    //             type: 'linear',
    //             position: 'right'
    //         }]
    //     }
    // }
});