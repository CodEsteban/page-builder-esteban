import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxThoughtComponent } from './box-thought.component';

describe('BoxMomentComponent', () => {
  let component: BoxThoughtComponent;
  let fixture: ComponentFixture<BoxThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxThoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
