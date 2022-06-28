import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCpfComponent } from './detalhes-cpf.component';

describe('DetalhesCpfComponent', () => {
  let component: DetalhesCpfComponent;
  let fixture: ComponentFixture<DetalhesCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesCpfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
