import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions,Chart} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-query10',
  templateUrl: './query10.component.html',
  styleUrls: ['./query10.component.css']
})
export class Query10Component implements OnInit {

  data_all: any[] = [];
  Month: any[] = [];
  Quantity: any[] = [];
  Store: any[] = [];
  public chart: any;


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery10MonthQuantityStore();
    this.createChart();
  }

  createChart(){
  
    new Chart('MyChart', {
       type: 'line',
       data: {
         labels: this.Store,
         datasets: [{
           label: 'Quantity',
           data: this.Quantity,
           borderWidth: 1
         }]
       },
       options: {
         scales: {
           y: {
             beginAtZero: true
           }
         }
       }
     });
   }
 

  getQuery10MonthQuantityStore(): void {
    this.queryService.getQuery10MonthQuantityStore().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.Month.push(d.Month)
          this.Quantity.push(d.Quantity)
          this.Store.push(d.Store)


        }
        this.data_all = data;
      }
    )
  }

}
