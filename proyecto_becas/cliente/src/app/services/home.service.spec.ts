import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

xdescribe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });

  it('Deberia de crear el componente Home', () => {
    expect(service).toBeTruthy();
  });
});
