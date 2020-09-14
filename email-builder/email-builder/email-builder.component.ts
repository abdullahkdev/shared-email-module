import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-email-builder',
  templateUrl: './email-builder.component.html',
  styleUrls: ['./email-builder.component.scss']
})
export class EmailBuilderComponent implements OnInit {
  title = 'email-builder-app';
  @ViewChild(EmailEditorComponent , {static:true})
  private emailEditor: EmailEditorComponent;
  constructor() { }

  ngOnInit() {
  }
  exportHtml() {
    this.emailEditor.exportHtml((data) =>{
      console.log('exportHtml', data)
     localStorage.setItem('exportHtml' ,JSON.stringify(data))
    });
 
  }
  editorLoaded() {
    let json ; /* DESIGN JSON GOES HERE */
    this.emailEditor.loadDesign(json);
  }
 

}
