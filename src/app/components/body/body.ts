import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from "../directives/directives";
import { Practice } from '../practice/practice';
import { MyModal } from "../my-modal/my-modal";
import { UserList } from "../user-list/user-list";
import { ProductList } from '../product-list/product-list';
import { EmployeeCrud } from "../employee-crud/employee-crud";
import { PipeDemo } from '../pipe-demo/pipe-demo';

@Component({
  selector: 'app-body',
  imports: [Databinding, Directives, Practice, MyModal, UserList, ProductList, EmployeeCrud, PipeDemo],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
