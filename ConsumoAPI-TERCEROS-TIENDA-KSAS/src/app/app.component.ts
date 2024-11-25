import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SiderbarComponent } from "./shared/components/sidebar/sidebar.component";
import LoginComponent from './bussiness/login/login.component';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { signal } from '@angular/core';
import { currentUser } from './bussiness/login/login.component'; // Importar la señal del usuario autenticado
import { Router } from '@angular/router'; // Importar Router para redirigir

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SiderbarComponent, LoginComponent, CommonModule], // Agregar CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SistemaWeb';
  currentUser = currentUser; // Vincular la señal global del usuario

  constructor(private router: Router) {} // Inyectar Router

  logout() {
    currentUser.set(null); // Limpiar datos del usuario
    console.log('Sesión cerrada');
    alert('Has cerrado sesión.');
    this.router.navigate(['/login']); // Redirigir al login
  }
}



