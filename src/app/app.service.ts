import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  private savedNumberSubject = new BehaviorSubject<number | null>(null);
  savedNumber$ = this.savedNumberSubject.asObservable();

  constructor(private cookieService: CookieService) {
    const savedNumber = this.cookieService.get('savedNumber');
    if (savedNumber) {
      this.savedNumberSubject.next(+savedNumber);
    }
  }

  saveNumber(number: number): void {
    try {
      this.cookieService.set('savedNumber', number.toString(), { expires: 7 }); //7 days to die for cookie
      this.savedNumberSubject.next(number);
    } catch (error) {
      console.error('Ошибка при сохранении цифры:', error);
    }
  }

  clearNumber(): void {
    try {
      this.cookieService.delete('savedNumber');
      this.savedNumberSubject.next(null);
    } catch (error) {
      console.error('Ошибка при удалении цифры:', error);
    }
  }
}