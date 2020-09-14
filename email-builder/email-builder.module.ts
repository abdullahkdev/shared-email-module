import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailBuilderComponent } from './email-builder/email-builder.component';
import { EmailEditorModule } from 'angular-email-editor';



@NgModule({
  declarations: [EmailBuilderComponent],
  imports: [
    EmailEditorModule,
    CommonModule
  ],
  exports: [EmailBuilderComponent]
})
export class EmailBuilderModule { }
