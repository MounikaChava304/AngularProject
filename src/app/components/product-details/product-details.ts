import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
 
	product: any = signal({});
  constructor(public activatedRoute: ActivatedRoute) {		
	}
	ngOnInit(){
		this.activatedRoute.queryParams.subscribe((queryparams) => {
		  console.log(queryparams);
		  this.product = queryparams;
		});
	}
}
