import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';


@Component({
  selector: 'app-an1b',
  templateUrl: './an1b.component.html',
  styleUrls: ['./an1b.component.css']
})
export class An1bComponent implements OnInit {
  

  data_all: any[] = [];
  Store: any[] = [];
  Month: any[] = [];
  Sales: any[] = [];
  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();

  chartData: ChartDataset[] = [
    {
      type: "line",
      label: 'Sales in Taka',
      data: this.Sales,
      
      borderColor: "black",
      borderWidth:1,
    }
  ];

  chartLabels: string[] = this.Store;

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        backgroundColor: '#ffeaff',
        displayColors: false,
        padding: 10,
        titleColor: '#0b4ad2',
        titleFont: {
          size: 18
        },
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13
        }
      }
    },
    scales: {
      x: {
        // Adjust bar thickness here
         // Change the value as needed
      },
      y: {
        beginAtZero: true,
      }
    },
    elements: {
      bar: {
        backgroundColor: '#4CAF50', // Change the color as needed
      }
    }
  };
  

  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.an1bStoreSale();
    this.dtoptions = {
      pagingType:'full_numbers'
    }
  }

  an1bStoreSale(): void {
    this.queryService. getan1bStoreSale().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.Store.push(d.Store)
          this.Month.push(d.Month)
       
          this.Sales.push(d.Sales)
          


        }
        this.data_all = data;
        this.dtTrigger.next(null);

      }
    )
  }

}
