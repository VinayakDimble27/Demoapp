import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchserviceService {

  constructor() { }

  GetBatchDetails()
  {
      return [
        { "Name" : "PPA", "Duration" : "4 Months", "Fees" : 9000},
        { "Name" : "WEB", "Duration" : "3 Months", "Fees" : 5000},
        { "Name" : "Project", "Duration" : "4 Months", "Fees" : 4500}
      ];
  }
}
