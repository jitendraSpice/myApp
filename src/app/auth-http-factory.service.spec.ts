import { TestBed } from '@angular/core/testing';

import { AuthHttpFactoryService } from './auth-http-factory.service';

describe('AuthHttpFactoryService', () => {
  let service: AuthHttpFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHttpFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
