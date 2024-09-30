import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HudComponent } from "./hud/hud.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'radaver.de';
}
