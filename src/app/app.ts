import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, Home, About, Contact, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Portfolio';
}
