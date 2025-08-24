import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header.component';
import { SidebarComponent } from '../shared/sidebar.component';
import { UserService } from '../../services/users/user.service';
import { User } from '../../services/users/user';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent],
  template: `
    <app-header></app-header>

    <div class="flex">
      <app-sidebar [activeRoute]="'register'"></app-sidebar>
      
      <!-- Main Content -->
      <main class="flex-1 p-8 bg-gray-50">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-medium text-gray-500">Cadastros</h1>
          <button 
            routerLink="/register/new"
            class="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            NOVO CADASTRO
          </button>
        </div>

        <!-- Users Table -->
        <div class="bg-white rounded-lg shadow-sm h-screen">
          <table class="w-full">
            <thead>
              <tr class="text-left border-b border-gray-200">
                <th class="px-6 py-3 text-gray-600">NOME</th>
                <th class="px-6 py-3 text-gray-600">E-MAIL</th>
                <th class="px-6 py-3 text-gray-600">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let user of users" class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4">{{user.name}}</td>
                <td class="px-6 py-4">{{user.email}}</td>
                <td class="px-6 py-4">
                  <span [class]="user.status === true ? 'text-green-600' : 'text-gray-400'">
                    {{user.status}}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class RegisterComponent {
  public users: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.userService.obterUsuarios().subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}
