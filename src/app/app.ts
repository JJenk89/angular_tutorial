import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './home/home';
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title='homes'
}
