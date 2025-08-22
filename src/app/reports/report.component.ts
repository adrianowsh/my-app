import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header.component';
import { SidebarComponent } from '../shared/sidebar.component';

interface Usuario {
  nome: string;
  email: string;
  status: 'Ativo' | 'Inativo';
}

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent],
  template: `
    <app-header></app-header>

    <div class="flex">
      <app-sidebar [activeRoute]="'reports'"></app-sidebar>

      <!-- Main Content -->
      <main class="flex-1 p-8 bg-gray-50">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-medium text-gray-500">Relatórios > Lista de usuários</h1>
          <button 
            class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            (click)="imprimirRelatorio()"
          >
            IMPRIMIR
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
              <tr *ngFor="let usuario of usuarios" class="border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4">{{usuario.nome}}</td>
                <td class="px-6 py-4">{{usuario.email}}</td>
                <td class="px-6 py-4">
                  <span [class]="usuario.status === 'Ativo' ? 'text-green-600' : 'text-gray-400'">
                    {{usuario.status}}
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
export class ReportsComponent {
  usuarios: Usuario[] = [
    { nome: 'Stephanie Nichols', email: 'stephanienichols@gmail.com', status: 'Ativo' },
    { nome: 'Jeffrey Kane', email: 'jeffrey_kane@yahoo.com', status: 'Ativo' },
    { nome: 'Darin Miller', email: 'darinmiller01@gmail.com', status: 'Ativo' },
    { nome: 'Andrew Stuart', email: 'andrewstuart@outlook.com', status: 'Ativo' },
    { nome: 'Valerie Aguilar', email: 'valerie_aguilar@gmal.com', status: 'Inativo' }
  ];

  imprimirRelatorio() {
    window.print();
    // Aqui você pode implementar uma lógica mais elaborada de impressão
  }
}
