import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedThemeService {
  // Signal reactivo que representa el estado del modo oscuro
  darkMode = signal(false);

  toggleDarkMode(): void {
    this.darkMode.update((value) => !value);
  }
}
