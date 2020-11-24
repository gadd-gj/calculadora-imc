import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GuiComponent } from './gui.component';

describe('GuiComponent', () => {
  let component: GuiComponent;
  let fixture: ComponentFixture<GuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuiComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Llamar al funcion validar_edad ', async () => {

    //Arrange
    let result = null;
    component.edad = 15;

    //Act
    component.validar_edad();
    result = component.edad;

    //Assert
    expect(result).toBe(true);

  });

  it('Llamar a la funcion btn_calcular', async () => {

    //Arrange
    let result = null;
    component.altura = 1.62;
    component.peso = 46;

    //Act 
    component.btn_calcular();
    result = component.imc;

    //Assert
    expect(result).toBe(17.527815881725342);

  });

  it('Llamar a la funcion validar_diagnostico', async () => {
    //Arrange
    let result = null;
    component.imc = 22;

    //Act
    component.validar_diagnostico();
    result = component.diagnostico;

    //Assert
    expect(result).toBe('Peso normal');


  });

  it('Llamar al funcion validar_genero ', async () => {

    //Arrange
    let result = null;
    component.genero = 'femenino';

    //Act
    component.validar_genero();
    result = component.genero;

    //Assert
    expect(result).toBe(false);

  });

});