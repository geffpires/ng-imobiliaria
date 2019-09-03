import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarClienteComponentComponent } from './cadastrar-cliente-component.component';

describe('CadastrarClienteComponentComponent', () => {
  let component: CadastrarClienteComponentComponent;
  let fixture: ComponentFixture<CadastrarClienteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarClienteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarClienteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
