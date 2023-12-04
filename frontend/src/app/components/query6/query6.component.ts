import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions,Chart} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';


@Component({
  selector: 'app-query6',
  templateUrl: './query6.component.html',
  styleUrls: ['./query6.component.css']
})
export class Query6Component implements OnInit {

  data_all: any[] = [];
  Item_name: any[] = [];
  Quantity: any[] = [];
  Store_key: any[] = [];
  public chart: any;
  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();

  

  createChart(){
  
    new Chart('MyChart', {
       type: 'line',
       data: {
         labels: this.Store_key,
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



  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery6ItemQuantityStore();
    this.createChart();
    this.dtoptions = {
      pagingType:'full_numbers'
    }
  }

  getQuery6ItemQuantityStore(): void {
    this.queryService.getQuery6ItemQuantityStore().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.Item_name.push(d.Item_name)
          this.Quantity.push(d.Quantity)
          this.Store_key.push(d.Store_key)

        }
        this.data_all = data;
        this.dtTrigger.next(null);

      }
    )
  }

}
