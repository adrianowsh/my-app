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
  imports: [CommonModule, RouterModule, AsideComponent, HeaderComponent],
  template: `
    <!-- Header -->
    <app-header></app-header>
    
    <div class="flex">
      <!-- Sidebar -->
     <app-aside></app-aside>

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