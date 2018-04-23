import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDrawingComponent } from './custom-drawing.component';

describe('CustomDrawingComponent', () => {
  let component: CustomDrawingComponent;
  let fixture: ComponentFixture<CustomDrawingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDrawingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
