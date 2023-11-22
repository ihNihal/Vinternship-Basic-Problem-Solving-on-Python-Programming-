import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query9',
  templateUrl: './query9.component.html',
  styleUrls: ['./query9.component.css']
})
export class Query9Component implements OnInit {

  data_all: any[] = [];
  item_name: any[] = [];
  quantity: any[] = [];
  division: any[] = [];


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery9DivisionItemQuantity();
  }

  getQuery9DivisionItemQuantity(): void {
    this.queryService.getQuery9DivisionItemQuantity().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.division.push(d.division)
          this.item_name.push(d.item_name)
          this.quantity.push(d.quantity)

        }
        this.data_all = data;
      }
    )
  }

}
