import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
          <div>
            <input
              type="email"
              formControlName="email"
              placeholder="Email"
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
          </div>
          
          <div>
            <input
              type="password"
              formControlName="password"
              placeholder="Senha"
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted', this.loginForm.value);
      // Aqui você implementará a lógica de autenticação
    }
  }
}