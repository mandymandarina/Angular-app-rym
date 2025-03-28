import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedThemeService {
  darkMode = signal(false);

  toggleDarkMode(): void {
    this.darkMode.update((value) => !value);
  }
}
