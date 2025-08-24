import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header.component';
import { SidebarComponent } from '../shared/sidebar.component';
import { User } from '../../services/users/user';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent],
  template: `
    <app-header></app-header>
    
    <div class="flex">
      <app-sidebar [activeRoute]="'home'"></app-sidebar>

      <!-- Main Content -->
      <main class="flex-1 p-8 bg-gray-50 h-full">
        <!-- Cards -->
        <div class="grid grid-cols-3 gap-6 mb-8 w-full">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="text-6xl font-light text-blue-700">{{users.length}}</div>
            <div class="text-gray-600 mt-2">Total de cadastros</div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="text-6xl font-light text-green-600">{{users.length}}</div>
            <div class="text-gray-600 mt-2 ">Cadastros no último mês</div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="text-6xl font-light text-red-600">{{inactiveUsersCount}}</div>
            <div class="text-gray-600 mt-2">Cadastros com pendência de revisão</div>
          </div>
        </div>

        <!-- Recent Records Table -->
        <div class="bg-white rounded-lg shadow-sm w-full">
          <div class="p-6">
            <h2 class="text-lg font-medium mb-4 text-gray-500">Últimos cadastros</h2>
            <table class="w-full">
              <thead>
                <tr class="text-left text-gray-600 border-b">
                  <th class="pb-3">NOME</th>
                  <th class="pb-3">E-MAIL</th>
                  <th class="pb-3">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let userRegistered of users" class="border-b">
                  <td class="py-3">{{userRegistered.name}}</td>
                  <td class="py-3">{{userRegistered.email}}</td>
                  <td class="py-3">
                    <span [class]="userRegistered.status === true ? 'text-green-600' : 'text-gray-400'">
                      {{userRegistered.status ? 'Ativo' : 'Inativo'}}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    
    .flex {
      flex: 1;
      display: flex;
    }
    
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
    }
  `]
})
export class HomeComponent {
  public users: User[] = [];
  public inactiveUsersCount: number = 0;

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
        this.inactiveUsersCount = this.users.filter(user => user.status === false).length;
        console.log(this.users);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
   }
}

