import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-multi-editor',
  templateUrl: './multi-editor.component.html',
  styleUrls: ['./multi-editor.component.less']
})
export class MultiEditorComponent implements OnInit {

  multidatas: any = [];
  htmlContent: string;
  outputJson: any = {};
  constructor() { }

  ngOnInit() {
    this.multidatas.push({});
  }

  onKeyMultiEditor() {
    // this.multidatas.forEach((ele: any) => {
    //   this.outputJson.data += ele.htmlContent;
    // });
    // document.getElementById('json').innerHTML = JSON.stringify(this.outputJson, undefined, 2);
  }

  ngAfterViewChecked() {
    $('.ngx-toolbar').css('display', 'none');
    $('.ngx-editor-textarea').css('min-height', '100px');
    $('.ngx-editor-textarea').css('background-color', 'white');
  }

  pushData() {
    this.multidatas.push({});
  }

  popData() {
    if (this.multidatas.length !== 1) {
      this.multidatas.pop();
    }
  }
}
