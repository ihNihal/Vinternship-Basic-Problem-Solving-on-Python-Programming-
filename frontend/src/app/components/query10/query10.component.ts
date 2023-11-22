import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
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
  month: any[] = [];
  quantity: any[] = [];
  store: any[] = [];


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery10MonthQuantityStore();
  }

  getQuery10MonthQuantityStore(): void {
    this.queryService.getQuery10MonthQuantityStore().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.month.push(d.month)
          this.quantity.push(d.quantity)
          this.store.push(d.store)


        }
        this.data_all = data;
      }
    )
  }

}
