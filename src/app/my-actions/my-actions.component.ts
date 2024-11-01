import { Component } from '@angular/core';
import { BaseChartDirective  } from 'ng2-charts';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-my-actions',
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './my-actions.component.html',
  styleUrl: './my-actions.component.css'
})
export class MyActionsComponent {
  public pieChartType: 'pie' = 'pie'; // Explicitly set the type to 'pie'

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Task', 'Timesheet', 'Evaluation', 'Programs'],
    datasets: [
      {
        data: [15, 1, 0, 1], // Example data
        backgroundColor: [  // Set the colors for each segment
          '#8837d3',  // Color for 'Leaves'
          '#ba1a1a',  // Color for 'Timesheet'
          '#4BC0C0',  // Color for 'Evaluation'
          '#5096df'   // Color for 'Expenses'
        ] as string[],
        hoverBackgroundColor: [ // Optional: colors for hover effect
          '#8837d3', 
          '#ba1a1a',
          '#4BC0C0',
          '#5096df'
        ] as string[]
      }
    ]
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 20,
          padding: 15,
          // Custom function to show labels with data values
          generateLabels: (chart) => {
            const data = chart.data;
            if (data?.labels && data?.datasets) {
              return data.labels.map((label, index) => {
                const value = data.datasets[0]?.data?.[index] ?? 'N/A'; // Default to 'N/A' if data is undefined
                const backgroundColor = (data.datasets[0]?.backgroundColor as string[])[index] || '#000'; // Cast backgroundColor as string[]
                return {
                  text: `${label}: ${value}`, // Concatenate label and data value
                  fillStyle: backgroundColor,
                  strokeStyle: backgroundColor,
                  index
                };
              });
            }
            return [];
          }
        }
      }
    }
  };

}
