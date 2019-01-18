import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsGalleryComponent } from './instructors-gallery.component';

describe('InstructorsGalleryComponent', () => {
  let component: InstructorsGalleryComponent;
  let fixture: ComponentFixture<InstructorsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
