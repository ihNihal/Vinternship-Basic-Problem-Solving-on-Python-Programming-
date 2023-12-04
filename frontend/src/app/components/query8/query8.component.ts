import {Component, OnDestroy, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import { DataTableDirective } from 'angular-datatables';
import {DataTablesModule} from 'angular-datatables'
import {Subject} from 'rxjs';


@Component({
  selector: 'app-query8',
  templateUrl: './query8.component.html',
  styleUrls: ['./query8.component.css']
})
export class Query8Component implements OnInit  {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  data_all: any[] = [];
  Item_name: any[] = [];
  Quantity: any[] = [];
  quarter: any[] = [];
  dtoptions: DataTables.Settings={};

  
  chartData: ChartDataset[] = [
    {
      type: "line",
      label: 'Sales accoriding to customer',
      data: this.Quantity,
    
    }
  ];
  chartLabels: string[] = this.Item_name;

  chartOptions: ChartOptions = {

    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: true,

    // // ⤵️ Remove the grids
    // scales: {
    //   xAxis: {
    //     display: false,
    //     grid: {
    //       drawBorder: false // removes random border at bottom
    //     }
    //   },
    //   yAxis: {
    //     display: false
    //   }
    // },

    plugins: {
      legend: {
        display: true,
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
    this.getQuery8ItemQuantityQuarter();
    this.dtoptions = {
      pagingType:'full_numbers'
    }
    // this.createTable();
   
     }

  getQuery8ItemQuantityQuarter(): void {
    this.queryService.getQuery8ItemQuantityQuarter().subscribe((data: any) => {
        for (const d of data) {
          this.Item_name.push(d.Item_name)
          this.Quantity.push(d.Quantity)
          this.quarter.push(d.quarter)

        }
        this.data_all = data;
        this.dtTrigger.next(null);
        
      }
    )
  }

}
