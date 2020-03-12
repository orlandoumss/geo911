import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistroComponent } from './admin-registro.component';

describe('AdminRegistroComponent', () => {
  let component: AdminRegistroComponent;
  let fixture: ComponentFixture<AdminRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
