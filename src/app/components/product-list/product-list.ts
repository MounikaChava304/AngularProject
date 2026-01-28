import { Component } from '@angular/core';
import productData from './product-data';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
// import {CharOnly} from '../../custom-directives/char-only';
import { Highlight } from '../../custom-directives/highlight';
import { Zoomin } from '../../custom-directives/zoomin';
import { Alphanumeric } from '../../custom-directives/alphanumeric';


@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule,
    FontAwesomeModule, NgxPaginationModule, Highlight, Zoomin, Alphanumeric], //add CharOnly if using that
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;

  productCategory = "All";
  sortFilter = 'All';
  searchKeyword = '';

  get categorizedProducts() {
    let returnArr = [...this.productArr];

    if (this.productCategory !== 'All') {
      returnArr = this.productArr.filter(
        product => product.category == this.productCategory
      );
    }
    if (this.sortFilter !== 'All') {
      if (this.sortFilter === 'Price : Low - High') {
        returnArr.sort((a, b) => a.price - b.price)
      }
      if (this.sortFilter === 'Price : High - Low') {
        returnArr.sort((a, b) => b.price - a.price)
      }
    }

    if (this.searchKeyword && this.searchKeyword.trim()) {
      const search = this.searchKeyword.toLowerCase();
      returnArr = returnArr.filter(product =>
        product.title.toLowerCase().includes(search)
      );
    }
    return returnArr;
  }

  faStar = faStarSolid;
  starArr = [1, 2, 3, 4, 5];
  p = 1; //p represents current page

  getStarType(rating: number, index: number) {
    // const exactRating = rating; //4.1
    const fullRating = Math.floor(rating); //4
    if (index <= fullRating) {
      return faStarSolid;
    } else if (index == fullRating + 1) {
      return faStarHalf;
    } else {
      return faStarRegular;
    }
  }

  setRating(product: any, rating: number) {
    product.rating.rate = rating;
  }

  openAlert() {
    Swal.fire('Page Saved?', 'Your Page Saved successfully !!!', 'success');
  }

  openSnackBar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}