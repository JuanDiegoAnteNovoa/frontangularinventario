import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionproductosinventarioComponent } from './gestionproductosinventario.component';

describe('GestionproductosinventarioComponent', () => {
  let component: GestionproductosinventarioComponent;
  let fixture: ComponentFixture<GestionproductosinventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionproductosinventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionproductosinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
