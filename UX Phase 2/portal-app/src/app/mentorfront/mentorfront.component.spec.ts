import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorFrontComponent } from './mentorfront.component';

describe('UserComponent', () => {
  let component: MentorFrontComponent;
  let fixture: ComponentFixture<MentorFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorFrontComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
