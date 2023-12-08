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
    name: 'Analytics 1a',
    icon: 'fa-solid fa-chart-line'
    ,
    routerLink: '/an1a',
  },
]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}