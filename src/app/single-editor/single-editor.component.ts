import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-single-editor',
  templateUrl: './single-editor.component.html',
  styleUrls: ['./single-editor.component.less']
})
export class SingleEditorComponent implements OnInit {

  htmlContent: string;
  outputJson: any ={};
  constructor() { }

  ngOnInit() {
  }

  onKeySingleEditor() {
    this.outputJson.data = this.htmlContent;
    document.getElementById('json').innerHTML = JSON.stringify(this.outputJson, undefined, 2);
  }

  ngAfterViewChecked() {
    $('.ngx-toolbar').css('display','none');
    $('.ngx-editor-textarea').css('min-height', '100px');
    $('.ngx-editor-textarea').css('background-color','white');
  }

}
