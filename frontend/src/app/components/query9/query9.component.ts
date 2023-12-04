import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';


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
  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery9DivisionItemQuantity();
    this.dtoptions = {
      pagingType:'full_numbers'
    }
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
        this.dtTrigger.next(null);

      }
    )
  }

}
