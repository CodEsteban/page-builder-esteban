import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThoughtScreenComponent } from './new-thought-screen.component';

describe('NewThoughtScreenComponent', () => {
  let component: NewThoughtScreenComponent;
  let fixture: ComponentFixture<NewThoughtScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewThoughtScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewThoughtScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
