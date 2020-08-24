import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  name = 'water';
  description = 'cold and pure';
  price = 10;
  category: Category = Category.Drinks;
  isAvailable = true;
  tags: string[] = ['new', 'star', 'elite'];

  constructor() { }

  ngOnInit(): void {
  }

}
