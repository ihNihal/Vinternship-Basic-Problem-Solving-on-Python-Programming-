import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';


@Component({
  selector: 'app-query3',
  templateUrl: './query3.component.html',
  styleUrls: ['./query3.component.css']
})
export class Query3Component implements OnInit {

  data_all: any[] = [];
  barishal: any[] = [];
  sales: any[] = [];
  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();


  
  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.query3BarishalSales();
    this.dtoptions = {
      
    }
  }

  query3BarishalSales(): void {
    this.queryService.getQuery3BarishalSales().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.barishal.push(d.barishal)
          this.sales.push(d.sales)
        }
        this.data_all = data;
        this.dtTrigger.next(null);

      }
    )
  }

}
