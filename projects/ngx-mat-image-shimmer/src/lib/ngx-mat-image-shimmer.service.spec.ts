import { TestBed } from '@angular/core/testing';

import { NgxMatImageShimmerService } from './ngx-mat-image-shimmer.service';

describe('NgxMatImageShimmerService', () => {
  let service: NgxMatImageShimmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatImageShimmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
