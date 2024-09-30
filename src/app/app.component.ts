import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RadarComponent } from "./radar/radar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RadarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'planet810';
}
