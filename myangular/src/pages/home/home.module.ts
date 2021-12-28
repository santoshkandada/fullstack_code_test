import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from '../../components/location/location.component';
import { DepartmentComponent } from "../../components/department/department.component";
import { CategoryComponent } from "../../components/category/category.component";
import { SubcategoryComponent } from "../../components/subcategory/subcategory.component";
import { FoodCatalogueComponent } from '../../components/foodcatalogue/foodcatalogue.component';
import { LocationDepCategoryComponent} from '../../components/locationdepcategory/locationdepcategory.component';

import { ReactiveFormsModule } from '@angular/forms';


const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    LocationComponent,
    DepartmentComponent,
    CategoryComponent,
    SubcategoryComponent,
    FoodCatalogueComponent,
    LocationDepCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    ReactiveFormsModule
  ],
  schemas: []
})
export class HomeModule { }