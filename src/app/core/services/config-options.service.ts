import { Injectable } from '@angular/core';
import { ConfigOptions } from '..';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configOptions: ConfigOptions ;

  getOptions(): ConfigOptions {
    return this.configOptions;
  }

  setOptions(options) {
    this.configOptions = Object.assign({}, options);
  }
}
