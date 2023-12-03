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
export class Query8Component implements OnInit ,OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  data_all: any[] = [];
  item_name: any[] = [];
  quantity: any[] = [];
  quarter: any[] = [];


  
  // chartData: ChartDataset[] = [
  //   {
  //     type: "bar",
  //     label: 'Sales accoriding to customer',
  //     data: this.quantity,
    
  //   }
  // ];
  // chartLabels: string[] = this.quantity;

  // chartOptions: ChartOptions = {

  //   // ⤵️ Fill the wrapper
  //   responsive: true,
  //   maintainAspectRatio: true,

  //   // // ⤵️ Remove the grids
  //   // scales: {
  //   //   xAxis: {
  //   //     display: false,
  //   //     grid: {
  //   //       drawBorder: false // removes random border at bottom
  //   //     }
  //   //   },
  //   //   yAxis: {
  //   //     display: false
  //   //   }
  //   // },

  //   plugins: {
  //     legend: {
  //       display: true,
  //     },

  //     tooltip: {
  //       // ⤵️ tooltip main styles
  //       backgroundColor: '#ffeaff',
  //       displayColors: false, // removes unnecessary legend
  //       padding: 10,

  //       // ⤵️ title
  //       titleColor: '#0b4ad2',
  //       titleFont: {
  //         size: 18
  //       },

  //       // ⤵️ body
  //       bodyColor: '#2D2F33',
  //       bodyFont: {
  //         size: 13
  //       }
  //     }
  //   }
  // };

ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
}

// createTable(){
//   this.dtOptions = {
//     ajax: 'http://127.0.0.1:5000/api/query8',
//     columns: [{
//       title: 'Item Name',
//       data: 'this.item_name'
      
//     }, {
//       title: 'Quantity',
//       data: 'this.quantity'
//     }, {
//       title: 'Quarter',
//       data: 'this.quarter'
//     }]
//   };
// }


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery8ItemQuantityQuarter();
    // this.createTable();
   
     }

  getQuery8ItemQuantityQuarter(): void {
    this.queryService.getQuery8ItemQuantityQuarter().subscribe((data: any) => {
        for (const d of data) {
          this.item_name.push(d.item_name)
          this.quantity.push(d.quantity)
          this.quarter.push(d.quarter)

        }
        this.data_all = data;
        
      }
    )
  }

}
