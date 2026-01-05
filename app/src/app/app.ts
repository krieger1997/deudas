import { Component, signal } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { IonRouterOutlet, IonApp } from "@ionic/angular/standalone";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonRouterOutlet, IonApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[

  ]
})
export class App {
  protected readonly title = signal('app');
}
