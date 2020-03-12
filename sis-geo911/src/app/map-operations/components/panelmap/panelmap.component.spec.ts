import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelmapComponent } from './panelmap.component';

describe('PanelmapComponent', () => {
  let component: PanelmapComponent;
  let fixture: ComponentFixture<PanelmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
