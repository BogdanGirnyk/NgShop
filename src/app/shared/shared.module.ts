import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';



@NgModule({
  declarations: [HighlightDirective, ClickDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, ClickDirective]
})
export class SharedModule { }
