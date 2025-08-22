import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
   <header class="bg-white border-b px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <span class="font-bold text-xl">OC</span>
        <span class="text-gray-600">Operação Curiosidade</span>
      </div>
      
      <div class="flex-1 mx-8">
        <input 
          type="text" 
          placeholder="Pesquisar..." 
          class="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none"
        >
      </div>

      <div class="flex items-center space-x-4">
        <span class="text-gray-700">Luciano Henrique</span>
        <button class="text-gray-600 hover:text-gray-800">SAIR</button>
      </div>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {

}
