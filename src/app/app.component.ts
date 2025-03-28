import { Component } from '@angular/core';
import { SharedThemeService } from './services/shared-theme.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  constructor(public theme: SharedThemeService) {}
  title = 'app-angular-RickyMorty';

  toggleDark(): void {
    this.theme.toggleDarkMode();

    document.body.classList.toggle('dark-mode', this.theme.darkMode());
  }
}
