import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query4',
  templateUrl: './query4.component.html',
  styleUrls: ['./query4.component.css']
})
export class Query4Component implements OnInit {

  data_all: any[] = [];
  sales: any[] = [];
  year: any[] = [];


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery4SalesYear();
  }

  getQuery4SalesYear(): void {
    this.queryService.getQuery4SalesYear().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.sales.push(d.sales)
          this.year.push(d.year)

        }
        this.data_all = data;
      }
    )
  }

}
