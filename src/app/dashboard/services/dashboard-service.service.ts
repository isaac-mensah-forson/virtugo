import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  navIsClosed = new BehaviorSubject<boolean>(false)
  
  constructor() { }
}
