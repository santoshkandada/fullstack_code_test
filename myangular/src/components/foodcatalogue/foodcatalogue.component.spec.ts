import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCatalogueComponent } from './foodcatalogue.component';

describe('DepartmentComponent', () => {
  let component: FoodCatalogueComponent;
  let fixture: ComponentFixture<FoodCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
