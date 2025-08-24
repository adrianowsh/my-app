import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-white border-b border-gray-300  px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <span class="font-bold text-xl">OC</span>
        <span class="text-gray-600">Operação Curiosidade</span>
      </div>

      <div class="flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Pesquisar..." 
          class="px-4 py-2 bg-gray-100 rounded-full focus:outline-none cursor-pointer" 
          style="width: 34rem;"
        >
        <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
        </div>
  <span class="text-gray-700">{{ userName }}</span>
  <button class="text-gray-600 hover:text-gray-800 cursor-pointer" (click)="logout()">SAIR</button>
      </div>
    </header>
  `
})
export class HeaderComponent {
  userName: string = '';

  constructor(private router: Router) {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.userName = payload.name || '';
    } catch (e) {
      this.userName = '';
    }
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }
}
