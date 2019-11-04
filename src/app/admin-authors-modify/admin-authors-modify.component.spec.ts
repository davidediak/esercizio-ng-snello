import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthorsModifyComponent } from './admin-authors-modify.component';

describe('AdminAuthorsModifyComponent', () => {
  let component: AdminAuthorsModifyComponent;
  let fixture: ComponentFixture<AdminAuthorsModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAuthorsModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthorsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
