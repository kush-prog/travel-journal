import { Component } from '@angular/core';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Header, RouterOutlet, Footer],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {}
