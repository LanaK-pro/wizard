import { Component, Pipe, inject } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { CommonModule, NgFor } from '@angular/common';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users$ = inject(UserService).fetchAllUsers();
}
