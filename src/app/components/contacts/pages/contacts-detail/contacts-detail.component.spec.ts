import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailComponent } from './contacts-detail.component';

describe('ContactsDetailComponent', () => {
  let component: ContactsDetailComponent;
  let fixture: ComponentFixture<ContactsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
