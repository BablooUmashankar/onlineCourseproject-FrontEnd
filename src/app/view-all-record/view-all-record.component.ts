import { Component } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-view-all-record',
  templateUrl: './view-all-record.component.html',
  styleUrls: ['./view-all-record.component.scss']
})
export class ViewAllRecordComponent {


  constructor(private _service : AdminServiceService){}

  OnInit(){

    
  }

  getRecord(){
    console.log("Hello ::::");
    
  }

}
