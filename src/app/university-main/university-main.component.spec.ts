import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityMainComponent } from './university-main.component';

describe('UniversityMainComponent', () => {
  let component: UniversityMainComponent;
  let fixture: ComponentFixture<UniversityMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
