import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NumberInputComponent } from './number-input/number-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatInputModule, 
    MatCardModule,
    NumberInputComponent 
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Сохраниение введенной цифры в cookie</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <app-number-input></app-number-input>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
    mat-card {
      max-width: 400px;
      margin: 2rem auto;
      padding: 2rem;
    }
  `,
  ],
})
export class AppComponent {
  title = 'num-input-site';
}