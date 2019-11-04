import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthorsAddComponent } from './admin-authors-add.component';

describe('AdminAuthorsAddComponent', () => {
  let component: AdminAuthorsAddComponent;
  let fixture: ComponentFixture<AdminAuthorsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAuthorsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
