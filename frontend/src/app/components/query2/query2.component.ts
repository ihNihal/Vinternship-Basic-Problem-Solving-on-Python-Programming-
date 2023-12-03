import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions,Chart} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

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
  dtOptions: DataTables.Settings = {};


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.query2NameSales();
    this.createChart();
  }

  createChart(){
  
   new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: this.Name,
        datasets: [{
          label: 'Sales',
          data: this.sales,
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

  query2NameSales(): void {
    this.queryService.getQuery2NameSales().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.Name.push(d.Name)
          this.sales.push(d.sales)
        }
        this.data_all = data;
        
      }
    )
  }

}
