import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/pages/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    CommonModule,
    RouterLink,
    DashboardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WearCraze';
}
