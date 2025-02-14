import { bootstrapApplication } from '@angular/platform-browser';
import { NumberInputComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApplicationConfig } from '@angular/core';

function mergeConfig(baseConfig: ApplicationConfig, additionalProviders: any[]): ApplicationConfig {
  return {
    ...baseConfig,
    providers: [
      ...(baseConfig.providers || []),
      ...additionalProviders,
    ],
  };
}

const mergedConfig = mergeConfig(appConfig, [provideAnimationsAsync()]);

bootstrapApplication(NumberInputComponent, mergedConfig).catch((err) => console.error(err));