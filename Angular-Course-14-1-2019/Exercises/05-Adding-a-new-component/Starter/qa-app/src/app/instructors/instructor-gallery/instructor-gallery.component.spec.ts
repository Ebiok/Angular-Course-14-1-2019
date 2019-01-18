import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorGalleryComponent } from './instructor-gallery.component';

describe('InstructorGalleryComponent', () => {
  let component: InstructorGalleryComponent;
  let fixture: ComponentFixture<InstructorGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
