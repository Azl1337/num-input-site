import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';
import { NumberService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonLabel,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputNumber: number | null = null;
  isInputEnabled = false;

  get savedNumber$(): Observable<number | null> {
    return this.numberService.savedNumber$;
  }

  constructor(private numberService: NumberService) {}

  enableInput(): void {
    this.isInputEnabled = true;
    this.inputNumber = null;
  }

  saveNumber(): void {
    console.log('Input Number:', this.inputNumber);
    if (this.inputNumber !== null) {
      this.numberService.saveNumber(this.inputNumber);
      this.isInputEnabled = false;
      this.inputNumber = null;
    } else {
      console.error('Введите число перед сохранением.');
    }
  }

  editNumber(): void {
    this.isInputEnabled = true;
    this.numberService.clearNumber();
  }
}