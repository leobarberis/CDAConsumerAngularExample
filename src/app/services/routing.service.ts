import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(
    private router: Router,
    private ngZone: NgZone
  ) {}

  navigate(path: string) {
    this.navigateInMemory(path);
  }

  navigateInMemory(path: string) {
    this.ngZone.run(() => this.router.navigateByUrl(path, {replaceUrl: true})).then();
  }

  location() {
    return this.router.url;
  }
}
