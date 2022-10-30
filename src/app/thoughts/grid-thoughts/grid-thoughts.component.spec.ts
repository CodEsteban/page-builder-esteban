import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridThoughtsComponent } from './grid-thoughts.component';

describe('GridMomentsComponent', () => {
  let component: GridThoughtsComponent;
  let fixture: ComponentFixture<GridThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridThoughtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
