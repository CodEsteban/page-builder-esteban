import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeProjectComponent } from './life-project.component';

describe('LifeProjectComponent', () => {
  let component: LifeProjectComponent;
  let fixture: ComponentFixture<LifeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
