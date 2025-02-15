import { Routes } from '@angular/router';
import { NumberInputComponent } from './number-input/number-input.component';

export const routes: Routes = [
  { path: '', component: NumberInputComponent }, 
  { path: '**', redirectTo: '' },
];