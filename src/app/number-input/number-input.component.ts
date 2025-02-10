import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NumberService } from './number-input.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatButtonModule, 
    MatInputModule, 
    MatCardModule
  ],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
})
export class NumberInputComponent {
  inputNumber: number | null = null;
  isInputEnabled = false;

  get savedNumber$(): Observable<number | null> {
    return this.numberService.savedNumber$;
  }

  constructor(private numberService: NumberService) {}

  enableInput(): void {
    this.isInputEnabled = true;
  }

  saveNumber(): void {
    if (this.inputNumber !== null) {
      this.numberService.saveNumber(this.inputNumber);
      this.isInputEnabled = false;
    }
  }

  editNumber(): void {
    this.isInputEnabled = true;
    this.numberService.clearNumber();
  }
}