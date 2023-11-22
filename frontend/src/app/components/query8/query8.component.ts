import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query8',
  templateUrl: './query8.component.html',
  styleUrls: ['./query8.component.css']
})
export class Query8Component implements OnInit {

  data_all: any[] = [];
  item_name: any[] = [];
  quantity: any[] = [];
  quarter: any[] = [];


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery8ItemQuantityQuarter();
  }

  getQuery8ItemQuantityQuarter(): void {
    this.queryService.getQuery8ItemQuantityQuarter().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.item_name.push(d.item_name)
          this.quantity.push(d.quantity)
          this.quarter.push(d.quarter)

        }
        this.data_all = data;
      }
    )
  }

}
