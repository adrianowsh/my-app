import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AsideComponent } from "../aside/aside";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-novo-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HeaderComponent],
  template: `
    <!-- Header -->
    <app-header></app-header>

    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-50 border-r">
        <nav class="p-4 space-y-2">
            <a routerLink="/home" class="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              <span>Home</span>
            </a>
            <a routerLink="/register" class="flex items-center space-x-2 p-2 bg-gray-200 rounded">
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
      <main class="flex-1 p-8 bg-gray-50">
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-medium">Novo cadastro</h1>
            <div>
              <label class="inline-flex items-center">
                <span class="mr-2">Ativo</span>
                <input 
                  type="checkbox" 
                  formControlName="ativo"
                  class="form-checkbox h-5 w-5 text-green-600"
                >
              </label>
            </div>
          </div>

          <form [formGroup]="cadastroForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <!-- 1º Fatos e Dados -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-lg font-medium mb-4">1° Fatos e Dados</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    formControlName="nome"
                    class="w-full p-2 border rounded focus:outline-none focus:border-green-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Idade</label>
                  <input 
                    type="number" 
                    formControlName="idade"
                    class="w-full p-2 border rounded focus:outline-none focus:border-green-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    formControlName="email"
                    class="w-full p-2 border rounded focus:outline-none focus:border-green-500"
                  >
                </div>
                <div class="col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
                  <input 
                    type="text" 
                    formControlName="endereco"
                    class="w-full p-2 border rounded focus:outline-none focus:border-green-500"
                  >
                </div>
                <div class="col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Outras informações</label>
                  <textarea 
                    formControlName="outrasInformacoes"
                    rows="3"
                    class="w-full p-2 border rounded focus:outline-none focus:border-green-500"
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- 2º Interesses -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-lg font-medium mb-4">2° Interesses</h2>
              <textarea 
                formControlName="interesses"
                rows="3"
                class="w-full p-2 border rounded focus:outline-none focus:border-green-500"
              ></textarea>
            </div>

            <!-- 3º Sentimentos -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-lg font-medium mb-4">3° Sentimentos</h2>
              <textarea 
                formControlName="sentimentos"
                rows="3"
                class="w-full p-2 border rounded focus:outline-none focus:border-green-500"
              ></textarea>
            </div>

            <!-- 4º Valores -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-lg font-medium mb-4">4° Valores</h2>
              <textarea 
                formControlName="valores"
                rows="3"
                class="w-full p-2 border rounded focus:outline-none focus:border-green-500"
              ></textarea>
            </div>

            <!-- Navigation and Submit -->
            <div class="flex justify-center items-center">
              <button 
                type="submit"
                class="px-6 py-2 mb-10 w-60 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                GRAVAR
              </button>
            </div>
          </form>
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
export class NewRegisterComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      ativo: [true],
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: [''],
      outrasInformacoes: [''],
      interesses: [''],
      sentimentos: [''],
      valores: ['']
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Form submitted', this.cadastroForm.value);
      // Aqui você implementará a lógica de salvar o cadastro
    }
  }
}