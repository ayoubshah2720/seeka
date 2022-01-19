import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyLevelComponent } from './study-level.component';

describe('StudyLevelComponent', () => {
  let component: StudyLevelComponent;
  let fixture: ComponentFixture<StudyLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
