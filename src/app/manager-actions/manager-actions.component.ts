import { Component } from '@angular/core';
import { BaseChartDirective  } from 'ng2-charts';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { CommonModule } from '@angular/common';  // Import CommonModule

interface PieChartDataset {
  data: number[];
  backgroundColor: string[];
}

@Component({
  selector: 'app-manager-actions',
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './manager-actions.component.html',
  styleUrl: './manager-actions.component.css'
})
export class ManagerActionsComponent {
  public pieChartType: 'pie' = 'pie'; // Explicitly set the type to 'pie'

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Leaves', 'Timesheet', 'Evaluation', 'Expenses'],
    datasets: [
      {
        data: [6, 0, 0, 0], // Example data
        backgroundColor: [  // Set the colors for each segment
          '#d75151',  // Color for 'Leaves'
          '#ba1a1a',  // Color for 'Timesheet'
          '#4BC0C0',  // Color for 'Evaluation'
          '#8837d3'   // Color for 'Expenses'
        ] as string[],
        hoverBackgroundColor: [ // Optional: colors for hover effect
          '#d75151', 
          '#ba1a1a',
          '#4BC0C0',
          '#8837d3'
        ] as string[]
      } as PieChartDataset
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

  // public pieChartOptions: ChartOptions<'pie'> = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   layout: {
  //     padding: {
  //       left: 10,
  //       right: 10, // Add padding on the right to create space between the chart and the legend
  //       top: 0,
  //       bottom: 0
  //     }
      
  //   },
  //   plugins: {
  //     legend: {
  //       position: 'right', // Positioning the legend on the right side
  //       labels: {
  //         boxWidth: 15,
  //         padding: 10
  //       }
  //     }
  //   }
  // };
}
