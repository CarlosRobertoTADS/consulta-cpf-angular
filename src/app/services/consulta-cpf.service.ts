import { Injectable } from '@angular/core';
import { MockCPFS } from '../shared/mocks/cpfs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCpfService {

  constructor() { }

  getAllCpfs() {
    return MockCPFS;
  }
  
}
