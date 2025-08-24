import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header.component';
import { SidebarComponent } from '../shared/sidebar.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-novo-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HeaderComponent, SidebarComponent],
  template: `
    <app-header></app-header>

    <div class="flex">
      <app-sidebar [activeRoute]="'register'"></app-sidebar>

      <!-- Main Content -->
      <main class="flex-1 p-8 bg-gray-50">
        <div class="w-full">
          <form [formGroup]="cadastroForm" (ngSubmit)="onSubmit()" class="space-y-6">
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
            <!-- 1º Fatos e Dados -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-lg font-medium mb-4">1° Fatos e Dados</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    formControlName="name"
                    class="w-full p-2 border border-gray-100 bg-gray-100 rounded focus:outline-none focus:border-green-500"
                  >
                  <span *ngIf="cadastroForm.get('name')?.invalid && cadastroForm.get('name')?.touched" class="text-red-500 text-xs">
                    Nome é obrigatório.
                  </span>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Idade</label>
                  <input 
                    type="number" 
                    formControlName="idade"
                    class="w-full p-2 border border-gray-100 bg-gray-100 rounded focus:outline-none focus:border-green-500"
                  >
                  <span *ngIf="cadastroForm.get('idade')?.invalid && cadastroForm.get('idade')?.touched" class="text-red-500 text-xs">
                    Idade é obrigatória e deve ser maior ou igual a 0.
                  </span>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    formControlName="email"
                    class="w-full p-2 border border-gray-100 bg-gray-100 rounded focus:outline-none focus:border-green-500"
                  >
                  <span *ngIf="cadastroForm.get('email')?.invalid && cadastroForm.get('email')?.touched" class="text-red-500 text-xs">
                    E-mail é obrigatório e deve ser válido.
                  </span>
                </div>
                <div class="col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
                  <input 
                    type="text" 
                    formControlName="endereco"
                    class="w-full p-2 border border-gray-100 bg-gray-100 rounded focus:outline-none focus:border-green-500"
                  >
                  <span *ngIf="cadastroForm.get('endereco')?.invalid && cadastroForm.get('endereco')?.touched" class="text-red-500 text-xs">
                    Endereço é obrigatório.
                  </span>
                </div>
                <div class="col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Outras informações</label>
                  <textarea 
                    formControlName="outrasInformacoes"
                    rows="3"
                    class="w-full p-2 border border-gray-100 bg-gray-100 rounded focus:outline-none focus:border-green-500"
                  ></textarea>
                  <span *ngIf="cadastroForm.get('outrasInformacoes')?.invalid && cadastroForm.get('outrasInformacoes')?.touched" class="text-red-500 text-xs">
                    Este campo é obrigatório.
                  </span>
                </div>
              </div>
            </div>

            <!-- 2º Interesses -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-lg font-medium mb-4">2° Interesses</h2>
              <textarea 
                formControlName="interesses"
                rows="3"
                class="w-full p-2 border border-gray-100 bg-gray-100 rounded focus:outline-none focus:border-green-500"
              ></textarea>
              <span *ngIf="cadastroForm.get('interesses')?.invalid && cadastroForm.get('interesses')?.touched" class="text-red-500 text-xs">
                Este campo é obrigatório.
              </span>
            </div>

            <!-- 3º Sentimentos -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-lg font-medium mb-4">3° Sentimentos</h2>
              <textarea 
                formControlName="sentimentos"
                rows="3"
                class="w-full p-2 border border-gray-100 bg-gray-100 rounded focus:outline-none focus:border-green-500"
              ></textarea>
              <span *ngIf="cadastroForm.get('sentimentos')?.invalid && cadastroForm.get('sentimentos')?.touched" class="text-red-500 text-xs">
                Este campo é obrigatório.
              </span>
            </div>

            <!-- 4º Valores -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-lg font-medium mb-4">4° Valores</h2>
              <textarea 
                formControlName="valores"
                rows="3"
                class="w-full p-2 border border-gray-100 bg-gray-100 rounded focus:outline-none focus:border-green-500"
              ></textarea>
              <span *ngIf="cadastroForm.get('valores')?.invalid && cadastroForm.get('valores')?.touched" class="text-red-500 text-xs">
                Este campo é obrigatório.
              </span>
            </div>

            <!-- Navigation and Submit -->
            <div *ngIf="errorMessage" class="text-red-500 text-center mb-4 text-sm">
              {{ errorMessage }}
            </div>
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
    }
  `]
})
export class NewRegisterComponent {
  cadastroForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.cadastroForm = this.fb.group({
      ativo: [true],
      password: 'asdf',
      name: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', Validators.required],
      outrasInformacoes: ['', Validators.required],
      interesses: ['', Validators.required],
      sentimentos: ['', Validators.required],
      valores: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      this.http.post(`${environment.apiUrl}/v1/users/register`, this.cadastroForm.value, { observe: 'response' })
        .subscribe({
          next: (response: any) => {
            console.log(response.status);
            if (response.status === 200) {
              this.router.navigate(['/register']);
            }
          },
          error: (error: any) => {
            this.errorMessage = 'Erro ao registrar usuário.';
            console.error(error);
          }
        });
    } else {
      this.cadastroForm.markAllAsTouched();
      this.errorMessage = 'Preencha todos os campos obrigatórios corretamente.';
    }
  }
}
