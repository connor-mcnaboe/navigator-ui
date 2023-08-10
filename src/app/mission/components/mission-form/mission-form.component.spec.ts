import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFormComponent } from './mission-form.component';

describe('MissionFormComponent', () => {
  let component: MissionFormComponent;
  let fixture: ComponentFixture<MissionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionFormComponent]
    });
    fixture = TestBed.createComponent(MissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
