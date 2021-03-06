import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';

@Component({
selector: 'app-pie-chart',
templateUrl: './pie-chart.component.html',
styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('pieChart') as HTMLCanvasElement;
var pieChart = new Chart(ctx, {
type: 'pie',
data: {
labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [{
label: '# of Votes',
data: [12, 19, 3, 5, 2, 3],
backgroundColor: [
'red',
'blue',
'yellow',
'green',
'purple',
'orange'
],
borderColor: [
'red',
'blue',
'yellow',
'green',
'purple',
'orange'
],
borderWidth: 1
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