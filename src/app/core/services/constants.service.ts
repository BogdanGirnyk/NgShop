import { InjectionToken } from '@angular/core';

export const SOMECONSTANT = new InjectionToken<string>('someconstant');
export const constantValue = '{ App: "TaskManager", Ver: "1.0", API_URL: "http://..." }';
