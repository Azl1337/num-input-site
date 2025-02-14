import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  private savedNumberSubject = new BehaviorSubject<number | null>(null);

  constructor() {
    this.loadNumber();
  }

  get savedNumber$(): Observable<number | null> {
    return this.savedNumberSubject.asObservable();
  }

  saveNumber(number: number): void {
    console.log('Saving Number:', number);
    if (number !== null) {
      localStorage.setItem('savedNumber', number.toString());
      this.savedNumberSubject.next(number);
    } else {
      console.error('Число не может быть null.');
    }
  }

  clearNumber(): void {
    localStorage.removeItem('savedNumber');
    this.savedNumberSubject.next(null);
  }

  private loadNumber(): void {
    const savedNumber = localStorage.getItem('savedNumber');
    if (savedNumber) {
      this.savedNumberSubject.next(+savedNumber);
    }
  }
}