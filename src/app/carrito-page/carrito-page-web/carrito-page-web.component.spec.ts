import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPageWebComponent } from './carrito-page-web.component';

describe('CarritoPageWebComponent', () => {
  let component: CarritoPageWebComponent;
  let fixture: ComponentFixture<CarritoPageWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoPageWebComponent]
    });
    fixture = TestBed.createComponent(CarritoPageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
