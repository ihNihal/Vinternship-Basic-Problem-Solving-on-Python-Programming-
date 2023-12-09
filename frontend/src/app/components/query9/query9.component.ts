import {Component, OnInit} from '@angular/core';
import {ChartDataset, ChartOptions,Chart} from "chart.js";
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
  Item_name: any[] = [];
  Quantity: any[] = [];
  Division: any[] = [];
  public chart: any;

  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();


  createChart(){
  
    new Chart('MyChart', {
       type: 'bar',
       data: {
         labels: this.Division,
         datasets: [{
           label: 'Quantity',
           data: this.Quantity,
           borderWidth: 1,
           barThickness:10,
           borderColor:'blue',
           backgroundColor:'lightblue',

           
         }]
       },
       options: {
       
         scales: {
           y: {
             beginAtZero: true
           }
         }
       }
     });
   }


  constructor(private queryService: QueryService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuery9DivisionItemQuantity();
    this.dtoptions = {
      pagingType:'full_numbers'
    }
    this.createChart();
  }

  getQuery9DivisionItemQuantity(): void {
    this.queryService.getQuery9DivisionItemQuantity().subscribe((data: any) => {
        for (const d of data) {
          console.log(d)
          this.Division.push(d.Division)
          this.Item_name.push(d.Item_name)
          this.Quantity.push(d.Quantity)

        }
        this.data_all = data;
        this.dtTrigger.next(null);

      }
    )
  }

}
