import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsideComponent } from "../aside/aside";
import { HeaderComponent } from "../header/header.component";

interface Cadastro {
  nome: string;
  email: string;
  status: 'Ativo' | 'Inativo';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  template: `
    <!-- Header -->
    <app-header></app-header>
    
    <div class="flex">
      <!-- Sidebar -->
     <aside class="w-64 bg-gray-50 border-r">
      <nav class="p-4 space-y-2">
        <a routerLink="/home" class="flex items-center space-x-2 p-2 rounded bg-gray-200 hover:bg-gray-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span>Home</span>
        </a>
        <a routerLink="/register" class="flex items-center space-x-2 p-2 rounded">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
          </svg>
          <span>Cadastro</span>
        </a>
        <a routerLink="/reports" class="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <span>Relatórios</span>
        </a>
      </nav>
     </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8 bg-gray-50 h-full">
        <!-- Cards -->
        <div class="grid grid-cols-3 gap-6 mb-8">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="text-6xl font-light text-blue-700">100</div>
            <div class="text-gray-600 mt-2">Total de cadastros</div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="text-6xl font-light text-green-600">10</div>
            <div class="text-gray-600 mt-2">Cadastros no último mês</div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="text-6xl font-light text-red-600">10</div>
            <div class="text-gray-600 mt-2">Cadastros com pendência de revisão</div>
          </div>
        </div>

        <!-- Recent Records Table -->
        <div class="bg-white rounded-lg shadow-sm">
          <div class="p-6">
            <h2 class="text-lg font-medium mb-4">Últimos cadastros</h2>
            <table class="w-full">
              <thead>
                <tr class="text-left text-gray-600 border-b">
                  <th class="pb-3">NOME</th>
                  <th class="pb-3">E-MAIL</th>
                  <th class="pb-3">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let cadastro of ultimosCadastros" class="border-b">
                  <td class="py-3">{{cadastro.nome}}</td>
                  <td class="py-3">{{cadastro.email}}</td>
                  <td class="py-3">
                    <span [class]="cadastro.status === 'Ativo' ? 'text-green-600' : 'text-gray-400'">
                      {{cadastro.status}}
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
      display: block;
      height: 100vh;
    }
  `]
})
export class HomeComponent {
  ultimosCadastros: Cadastro[] = [
    { nome: 'Stephanie Nichols', email: 'stephanienichols@gmail.com', status: 'Ativo' },
    { nome: 'Jeffrey Kane', email: 'jeffrey_kane@yahoo.com', status: 'Ativo' },
    { nome: 'Darin Miller', email: 'darinmiller01@gmail.com', status: 'Ativo' },
    { nome: 'Andrew Stuart', email: 'andrewstuart@outlook.com', status: 'Ativo' },
    { nome: 'Valerie Aguilar', email: 'valerie_aguilar@gmal.com', status: 'Inativo' }
  ];
}