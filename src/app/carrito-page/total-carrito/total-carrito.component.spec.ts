import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCarritoComponent } from './total-carrito.component';

describe('TotalCarritoComponent', () => {
  let component: TotalCarritoComponent;
  let fixture: ComponentFixture<TotalCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalCarritoComponent]
    });
    fixture = TestBed.createComponent(TotalCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
