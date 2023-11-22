import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query1',
  templateUrl: './query1.component.html',
  styleUrls: ['./query1.component.css']
})
export class Query1Component implements OnInit {

  data_all: any[] = [];
  division: any[] = [];
  sales: any[] = [];

  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.query1DivisionData();
  }

  query1DivisionData(): void {
    this.queryService.getQuery1Division().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.division.push(d.division)
          this.sales.push(d.sales)
        }
        this.data_all = data;
      }
    )
  }

}
