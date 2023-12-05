import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions,Chart} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';



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
  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery10MonthQuantityStore();
    this.createChart();
    this.dtoptions = {
      pagingType:'full_numbers'
    }
  }

  createChart(){
  
    new Chart('MyChart', {
       type: 'line',
       data: {
         labels: this.Store,
         datasets: [{
           label: 'Quantity',
           data: this.Quantity,
           borderWidth: 1,
           
           
         }]
       },
       options: {
        elements: {
            line:{
              borderColor: 'lightblue',
              borderWidth: 10,
            },
        },
        animation:false,
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
        this.dtTrigger.next(null);
      }
    )
  }

}
