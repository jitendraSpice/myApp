import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dataUser: any;
  constructor(public api: ApiService) { }
  ngOnInit() { 
    // this.getUserData();
    
  }
  captureDevice(){
    this.api.customMethodData();
  }
  async getUserData() {
    await this.api.getDataUser().subscribe(res => {
      this.dataUser = res;
      console.log('sadadasdasd', this.dataUser);
    }, error => {
      console.log('error', error);
    })
  }
}
