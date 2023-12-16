import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';


@Component({
  selector: 'app-an3a',
  templateUrl: './an3a.component.html',
  styleUrls: ['./an3a.component.css']
})
export class An3aComponent implements OnInit {
  

  data_all: any[] = [];
  Item: any[] = [];
  Sales: any[] = [];
  month: any[] = [];
  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();

  chartData: ChartDataset[] = [
    {
      type: "bar",
      label: 'Sales in Taka',
      data: this.Sales,
      barThickness: 20,
      borderColor: "black",
      borderWidth:1,
    }
  ];

  chartLabels: string[] = this.Item;

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
    this.an3aStoreSale();
    this.dtoptions = {
      pagingType:'full_numbers'
    }
  }

  an3aStoreSale(): void {
    this.queryService. getan3aStoreSale().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.Item.push(d.Item)
          this.Sales.push(d.Sales)
          this.month.push(d.month)


        }
        this.data_all = data;
        this.dtTrigger.next(null);

      }
    )
  }

}
