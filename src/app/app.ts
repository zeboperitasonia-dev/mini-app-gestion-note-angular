import { Component, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from "./components/header/header";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projet-approfondir');
  merciVisible = true;
  afficherMerci(){
    this.merciVisible =false;
  }
}
