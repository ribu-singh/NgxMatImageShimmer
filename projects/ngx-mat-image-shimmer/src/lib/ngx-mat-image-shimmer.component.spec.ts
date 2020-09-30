import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatImageShimmerComponent } from './ngx-mat-image-shimmer.component';

describe('NgxMatImageShimmerComponent', () => {
  let component: NgxMatImageShimmerComponent;
  let fixture: ComponentFixture<NgxMatImageShimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatImageShimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatImageShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
