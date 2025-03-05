import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrudctosListComponent } from './prudctos-list.component';

describe('PrudctosListComponent', () => {
  let component: PrudctosListComponent;
  let fixture: ComponentFixture<PrudctosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrudctosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrudctosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
