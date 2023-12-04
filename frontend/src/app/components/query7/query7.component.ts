import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {QueryService} from "../../services/query.service";
import {query} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';


@Component({
  selector: 'app-query7',
  templateUrl: './query7.component.html',
  styleUrls: ['./query7.component.css']
})
export class Query7Component implements OnInit {

  data_all: any[] = [];
  item_name: any[] = [];
  val:string = "";
  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery7ItemName(this.val);
    this.dtoptions = {
      pagingType:'full_numbers'
    }
  }

  getValue(val:string)
  {
    this.queryService.getDataByDays(val).subscribe((data:any) =>{
      this.data_all = data;
    })
   
  }

  getQuery7ItemName(val:string): void {
    this.queryService.getQuery7ItemName(val).subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          console.log(data)
          this.item_name.push(d.month)
        }
        this.data_all = data;
        this.dtTrigger.next(null);
      }
    )
  }

}
