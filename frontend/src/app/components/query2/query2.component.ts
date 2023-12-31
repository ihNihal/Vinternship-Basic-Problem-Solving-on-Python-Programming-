import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions,Chart} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {

  data_all: any[] = [];
  Name: any[] = [];
  sales: any[] = [];
  public chart: any;
  tick: any[] = [];
  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.query2NameSales();
    this.createChart();
    this.dtoptions = {
      pagingType:'full_numbers'
    }
  }

  createChart(){
  
   new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: this.Name,
        datasets: [{
          label: 'Sales',
          data: this.sales,
          borderWidth: 1,
          barThickness: 20,
          borderColor: 'black',
        }]
      },
      options: {

        plugins:{
          decimation:{
            enabled:false,
            algorithm: 'min-max',
          },
        },
        scales: {
         
          
          y: {
            beginAtZero: true
          }
        },
        
      }
    });
  }

 
  query2NameSales(): void {
    this.queryService.getQuery2NameSales().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.Name.push(d.Name)
          this.sales.push(d.sales)
        }
        this.data_all = data;
        this.dtTrigger.next(null);
        
      }
    )
  }

}
