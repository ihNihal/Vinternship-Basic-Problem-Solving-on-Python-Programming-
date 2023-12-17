import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';


@Component({
  selector: 'app-query1',
  templateUrl: './query1.component.html',
  styleUrls: ['./query1.component.css']
})
export class Query1Component implements OnInit {
  

  data_all: any[] = [];
  division: any[] = [];
  sales: any[] = [];
  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();

  chartData: ChartDataset[] = [
    {
      type: "pie",
      label: 'Sales in Taka',
      data: this.sales,
      
    }
  ];

  chartLabels: string[] = this.division;

  chartOptions: ChartOptions = {

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    // ⤵️ Remove the grids
    scales: {
      xAxis: {
        display: true,
        afterDataLimits(axis) {
            
        },
        grid: {
          drawBorder: false // removes random border at bottom
        }
      },
      yAxis: {
        display: false
      }
    },

    plugins: {
      legend: {
        display: true,
      },
      decimation:{
        enabled:false,
        algorithm: 'min-max',
      },

      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: '#ffeaff',
        displayColors: false, // removes unnecessary legend
        padding: 10,

        // ⤵️ title
        titleColor: '#0b4ad2',
        titleFont: {
          size: 18
        },

        // ⤵️ body
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13
        }
      }
    }
  };

  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.query1DivisionData();
    this.dtoptions = {
      pagingType:'full_numbers'
    }
  }

  query1DivisionData(): void {
    this.queryService.getQuery1Division().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.division.push(d.division)
          this.sales.push(d.sales)
        }
        this.data_all = data;
        this.dtTrigger.next(null);

      }
    )
  }

}
