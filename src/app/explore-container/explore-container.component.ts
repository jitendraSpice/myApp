import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(public api: ApiService) { }

  ngOnInit() {}
  captureDevice(){
    this.api.customMethodData();
  }
}
