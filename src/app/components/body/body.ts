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
import { Demo2 } from "../demo2/demo2";
import { Demo1 } from '../demo1/demo1';
import { Employee } from '../employee/employee';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';
import { UserCrud } from '../user-crud/user-crud';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { EmployeeSubject } from '../employee-subject/employee-subject';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { ModelDrivenForm } from '../model-driven-form/model-driven-form';
import { TodoSignal } from '../todo-signal/todo-signal';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { RouterOutlet } from "@angular/router";
import { UserDetails } from '../user-details/user-details';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-body',
  imports: [Databinding, Directives, Practice, MyModal, UserList, ProductList, PipeDemo, ParentDemo, Categories, CategoryItem, EmployeeAssignment, EmployeeCrud, Demo2, Demo1, Employee, HttpDemo1, CommentList, EmployeeList, UserCrud, ObservableDemo1, ObservableDemo2, SubjectDemo1, SignalDemo1, EmployeeSubject, FormDemo1, ModelDrivenForm, TodoSignal, DynamicForm, RouterOutlet, UserDetails, ProductDetails, ProductList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag = true;
}
