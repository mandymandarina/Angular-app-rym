import { TestBed } from '@angular/core/testing';
import { SharedThemeService } from './shared-theme.service';

describe('SharedThemeService', () => {
  let service: SharedThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial darkMode as false', () => {
    expect(service.darkMode()).toBeFalse();
  });

  it('should toggle darkMode to true', () => {
    service.toggleDarkMode();
    expect(service.darkMode()).toBeTrue();
  });

  it('should toggle darkMode back to false', () => {
    service.toggleDarkMode();
    service.toggleDarkMode();
    expect(service.darkMode()).toBeFalse();
  });
});
