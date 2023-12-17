import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

list =[
  {
    number: '1',
    name: 'Home',
    icon: 'fa-solid fa-home',
    routerLink: "/"
  },
  {
    number: '2',
    name: 'Query 1',
    icon: 'fa-solid fa-rocket',
    routerLink: '/query1',
  },
  {
    number: '3',
    name: 'Query 2',
    icon: 'fa-solid fa-rocket',
    routerLink: '/query2',
    
  },
  {
    number: '4',
    name: 'Query 3',
    icon: 'fa-solid fa-rocket',
    routerLink: '/query3',
    
  },
  {
    number: '5',
    name: 'Query 4',
    icon: 'fa-solid fa-rocket',
    routerLink: '/query4',
    
  },
  {
    number: '6',
    name: 'Query 5',
    icon: 'fa-solid fa-rocket',
    routerLink: '/query5',
    
  },
  {
    number: '7',
    name: 'Query 6',
    icon: 'fa-solid fa-rocket',
    routerLink: '/query6',
    
  },
  {
    number: '8',
    name: 'Query 7',
    icon: 'fa-solid fa-rocket',
    routerLink: '/query7',
    
  },
  {
    number: '9',
    name: 'Query 8',
    icon: 'fa-solid fa-rocket',
    routerLink: '/query8',
    
  },
  {
    number: '10',
    name: 'Query 9',
    icon: 'fa-solid fa-rocket',
    routerLink: '/query9',
    
  },
  {
    number: '11',
    name: 'Query 10',
    icon: 'fa-solid fa-rocket'
    ,
    routerLink: '/query10',
  },
  
  {
    number: '12',
    name: 'Store And Time 1',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an1a',
  },
  {
    number: '13',
    name: 'Store And Time 2',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an1b',
  },
  {
    number: '14',
    name: 'Customer And Time 1',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an2a',
  },
  {
    number: '15',
    name: 'Customer And Time 2',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an2b',
  },
  {
    number: '16',
    name: 'Item And Time 1',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an3a',
  },
  {
    number: '17',
    name: 'Item And Time 2',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an3b',
  },
  {
    number: '18',
    name: 'Store And Time -> Inventory 1',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an4a',
  },
  {
    number: '19',
    name: 'Store And Time -> Inventory 2',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an4b',
  },
  {
    number: '20',
    name: 'Item And Time-> Inventory 1',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an5a',
  },
  {
    number: '21',
    name: 'Item And Time-> Inventory 2',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an5b',
  },
]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}