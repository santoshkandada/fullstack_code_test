import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDepCategoryComponent } from './locationdepcategory.component';

describe('DepartmentComponent', () => {
  let component: LocationDepCategoryComponent;
  let fixture: ComponentFixture<LocationDepCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDepCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDepCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {   
    expect(component).toBeTruthy();
  });
});
