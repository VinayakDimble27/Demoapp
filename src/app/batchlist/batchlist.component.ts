import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent implements OnInit {
  public batchlist = [];
  constructor( private _batch: BatchserviceService ) { }

  ngOnInit() {
    this.batchlist = this._batch.GetBatchDetails();
  }
}
