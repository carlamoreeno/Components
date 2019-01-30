import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadessecretasComponent } from './identidadessecretas.component';

describe('IdentidadessecretasComponent', () => {
  let component: IdentidadessecretasComponent;
  let fixture: ComponentFixture<IdentidadessecretasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentidadessecretasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentidadessecretasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
