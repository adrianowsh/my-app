import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-white">
      <div class="w-full max-w-md p-8 border rounded-lg">
        <!-- Logo -->
        <div class="mb-8 text-center">
          <div class="bg-gray-200 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-2">
            <div class="text-center">
              <div class="text-4xl font-bold">OC</div>
              <div class="text-sm">Operação Curiosidade</div>
            </div>
          </div>
        </div>

        <!-- Login Form -->
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div *ngIf="errorMessage" class="text-red-500 text-center mb-4 text-sm">
            {{ errorMessage }}
          </div>
          <div>
            <input
              type="email"
              formControlName="email"
              placeholder="Email"
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black cursor-pointer"
            />
            <span *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched" class="text-red-500 text-xs">
              Informe um email válido.
            </span>
          </div>
          <div>
            <input
              type="password"
              formControlName="password"
              placeholder="Senha"
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black cursor-pointer"
            />
            <span *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" class="text-red-500 text-xs">
              Informe a senha.
            </span>
          </div>
          <button
            type="submit"
            class="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors cursor-pointer"
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]   
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.http.post(`${environment.apiUrl}/v1/users/login`, loginData, { observe: 'response' })
        .subscribe({
          next: (response: any) => {
            if (response.status === 200 && response.body?.accessToken) {
              localStorage.setItem('accessToken', response.body.accessToken);
              this.router.navigate(['/home']);
            } else {
              console.warn('Login realizado, mas sem accessToken retornado.');
            }
          },
          error: (error: any) => {
            console.error('Erro ao autenticar:', error);
          }
        });
      this.errorMessage = '';
    } else {
      this.loginForm.markAllAsTouched();
      this.errorMessage = 'Preencha email e senha corretamente.';
    }
  }
}