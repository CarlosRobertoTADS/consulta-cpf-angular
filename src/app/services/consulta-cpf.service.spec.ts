import { TestBed } from '@angular/core/testing';

import { ConsultaCpfService } from './consulta-cpf.service';

describe('ConsultaCpfService', () => {
  let service: ConsultaCpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaCpfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
