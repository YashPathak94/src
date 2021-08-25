import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private appService:ServiceService) { }

  ngOnInit(): void {
  }
  loadDoc(){
    this.appService.getFirwareDetails().subscribe(data => {
      console.log(data);
    });
  }
}
