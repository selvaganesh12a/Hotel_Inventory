import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = 'http://localhost:5000/api/rooms'; // url of the rooms api
  private refreshTrigger = new BehaviorSubject<boolean>(false);
  refreshRooms$ = this.refreshTrigger.asObservable();

  constructor(private http: HttpClient) {}

  getRooms(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  triggerRefresh(): void {
    this.refreshTrigger.next(true);
  }
}
