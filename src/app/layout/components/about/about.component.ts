import { Inject, Optional } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ConfigOptionsService, GENERATEDSTRING, generatorFactory, GeneratorService, LocalStorageService, SOMECONSTANT } from 'src/app/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: GENERATEDSTRING, useFactory: generatorFactory(5), deps: [GeneratorService]}
  ]
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() readonly localStorageService: LocalStorageService,
    @Optional() readonly configOptionsService: ConfigOptionsService,
    @Optional() @Inject(SOMECONSTANT) readonly someConst: string,
    @Optional() @Inject(GENERATEDSTRING) readonly generatedString: string) {
   }

  ngOnInit(): void {
    this.localStorageService.setItem('myKey', 'myValue');
    this.configOptionsService.setOptions({ id : 'someId' });
  }

}
