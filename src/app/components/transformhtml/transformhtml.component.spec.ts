import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformhtmlComponent } from './transformhtml.component';

describe('TransformhtmlComponent', () => {
  let component: TransformhtmlComponent;
  let fixture: ComponentFixture<TransformhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformhtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
