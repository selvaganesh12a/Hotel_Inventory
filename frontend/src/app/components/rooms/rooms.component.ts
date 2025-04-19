import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoomService } from '../../services/rooms/room.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit, OnDestroy {
  rooms: any = [];
  filteredRooms: any;
  private refreshSub!: Subscription;

  constructor(private roomService: RoomService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRooms();

    this.refreshSub = this.roomService.refreshRooms$.subscribe(() => {
      this.fetchRooms(); // 🔁 re-fetch when notified
    });
  }

  ngOnDestroy(): void {
    this.refreshSub?.unsubscribe(); // 🧹 prevent memory leaks
  }

  fetchRooms(): void {
    this.http
      .get<any[]>('http://localhost:5000/api/rooms/all')
      .subscribe((data) => {
        console.log('Raw Room Data:', data);
        this.rooms = data.filter(
          (room) => room.status?.toLowerCase() === 'available'
        );
        console.log('Filtered Available Rooms:', this.rooms);
      });
  }
}
