import { SCRIPTS } from './mock-scripts';
import { Injectable } from '@angular/core';
import { Script } from './script';

@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  constructor() {}

  getScripts(): Script[] {
    return SCRIPTS;
  }
}
