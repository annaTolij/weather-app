import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTownComponent } from './select-town.component';

describe('SelectTownComponent', () => {
  let component: SelectTownComponent;
  let fixture: ComponentFixture<SelectTownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
