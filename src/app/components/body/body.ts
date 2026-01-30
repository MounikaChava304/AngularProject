import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from "../directives/directives";
import { Practice } from '../practice/practice';
import { MyModal } from "../my-modal/my-modal";
import { UserList } from "../user-list/user-list";
import { ProductList } from '../product-list/product-list';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Categories } from "../categories/categories";
import { CategoryItem } from "../category-item/category-item";
import { EmployeeAssignment } from '../employee-assignment/employee-assignment';
import { EmployeeCrud } from '../employee-crud/employee-crud';

@Component({
  selector: 'app-body',
  imports: [Databinding, Directives, Practice, MyModal, UserList, ProductList, PipeDemo, ParentDemo, Categories, CategoryItem, EmployeeAssignment, EmployeeCrud],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
