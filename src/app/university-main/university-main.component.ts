import { Component, OnInit } from '@angular/core';
import { UniversityListService } from '../_Service/universityService/university-list.service';

@Component({
  selector: 'app-university-main',
  templateUrl: './university-main.component.html',
  styleUrls: ['./university-main.component.scss']
})
export class UniversityMainComponent implements OnInit {
  universityLists: any;
  p:number = 1;

  constructor(private universityService:UniversityListService) { }

  ngOnInit(): void {
    this.universityLists = this.universityService.universityList
  }

}
