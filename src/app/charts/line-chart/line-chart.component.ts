
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
selector: 'app-line-chart',
templateUrl: './line-chart.component.html',
styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('lineChart') as HTMLCanvasElement;
var lineChart = new Chart(ctx, {
type: 'line',
data: {
labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [{
label: '# of Votes',
data: [12, 19, 3, 5, 2, 3],
backgroundColor: [
'red',
],
borderColor: [
'red',
],
borderWidth: 1,
fill: false
}]
},
options: {
animation: {
duration: 3000,
easing: 'easeInCubic',
},
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});
}

}