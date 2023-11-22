import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
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
  name: any[] = [];
  sales: any[] = [];

  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.query2NameSales();
  }

  query2NameSales(): void {
    this.queryService.getQuery2NameSales().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.name.push(d.name)
          this.sales.push(d.sales)
        }
        this.data_all = data;
      }
    )
  }

}
