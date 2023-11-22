import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query6',
  templateUrl: './query6.component.html',
  styleUrls: ['./query6.component.css']
})
export class Query6Component implements OnInit {

  data_all: any[] = [];
  item_name: any[] = [];
  quantity: any[] = [];
  store_key: any[] = [];


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery6ItemQuantityStore();
  }

  getQuery6ItemQuantityStore(): void {
    this.queryService.getQuery6ItemQuantityStore().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.item_name.push(d.item_name)
          this.quantity.push(d.quantity)
          this.store_key.push(d.store_key)

        }
        this.data_all = data;
      }
    )
  }

}
