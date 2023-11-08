import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubunitsComponent } from './subunits.component';

describe('SubunitsComponent', () => {
  let component: SubunitsComponent;
  let fixture: ComponentFixture<SubunitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubunitsComponent]
    });
    fixture = TestBed.createComponent(SubunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
