import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductonuevoComponent } from './productonuevo.component';

describe('ProductonuevoComponent', () => {
  let component: ProductonuevoComponent;
  let fixture: ComponentFixture<ProductonuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductonuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductonuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
