import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBrowseComponent } from './course-browse.component';

describe('CourseBrowseComponent', () => {
  let component: CourseBrowseComponent;
  let fixture: ComponentFixture<CourseBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
