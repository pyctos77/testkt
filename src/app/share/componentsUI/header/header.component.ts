import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[RouterLink],
  template: ` <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <a class="navbar-brand" routerLink="/"
      >Forms<span class="text-danger">Reactive</span></a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" routerLink="/"
            >Home<span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/formGroup">Form Group</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/activities">Activities</a>
        </li>
      </ul>
    </div>
  </nav>`,
})
export class HeaderComponent {}