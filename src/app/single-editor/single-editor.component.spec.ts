import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEditorComponent } from './single-editor.component';

describe('SingleEditorComponent', () => {
  let component: SingleEditorComponent;
  let fixture: ComponentFixture<SingleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
