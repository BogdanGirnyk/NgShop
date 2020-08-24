import { Component, ViewChild, OnInit, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: false}) appTitle: ElementRef;
  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'Shop';
  }
}
