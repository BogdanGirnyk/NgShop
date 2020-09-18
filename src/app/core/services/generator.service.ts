import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

generate(n: number): string {
    return 'dHf6jnG67KJE73OpyCD2kFHL7Sv7sjk3dv63v4537'.slice(0, n);
  }
}
