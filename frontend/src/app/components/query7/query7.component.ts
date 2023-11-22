import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query7',
  templateUrl: './query7.component.html',
  styleUrls: ['./query7.component.css']
})
export class Query7Component implements OnInit {

  data_all: any[] = [];
  item_name: any[] = [];
  


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery7ItemName();
  }

  getQuery7ItemName(): void {
    this.queryService.getQuery7ItemName().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.item_name.push(d.month)
          


        }
        this.data_all = data;
      }
    )
  }

}
