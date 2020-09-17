import { GeneratorService } from './generator.service';

import { InjectionToken } from '@angular/core';

export const GENERATEDSTRING = new InjectionToken<string>('generatedstring');
export function generatorFactory(take: number) {
  return (generatorService: GeneratorService): string => generatorService.generate(take);
}
