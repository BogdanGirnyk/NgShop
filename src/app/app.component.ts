import { Component, ViewChild, OnInit, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: false}) appTitle: ElementRef;

  constructor(public usersService: UsersService) {}
  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'Shop';
  }

  onAuthorize() {
    this.usersService.Authorize();
  }

  onLogOut() {
    this.usersService.LogOut();
  }
}
