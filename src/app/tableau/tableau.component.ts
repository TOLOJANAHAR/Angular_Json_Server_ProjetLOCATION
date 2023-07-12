import { Component, OnInit } from '@angular/core';
import { CaracteristiqueService } from '../services/caracteristique.service';
import { Product } from 'model/carac.model';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productService: CaracteristiqueService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProduct().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  handleDelete(product: Product) {
    if (confirm("Are you sure?")) {
      this.productService.deleteProduct(product).subscribe({
        next: value => {
          this.products = this.products.filter(p => p.id !== product.id);
        }
      });
    }
  }

  update(product: Product) {
    this.productService.updateProduct(product).subscribe({
      next: value => {
        this.products = this.products.filter(p => p.id !== product.id);
      }
    });
  }
  saveChanges() {
    if (confirm("Are you sure?")) {
      this.products.forEach(product => {
        this.productService.updateProduct(product).subscribe();
        product.editMode = !product.editMode;
      });
    }
    this.products.forEach(product => product.editMode = false);
  }
  toggleEditMode(product: Product) {
    product.editMode = !product.editMode;

  }

  total = this.productService.total().subscribe();
  maximum = this.productService.maximum().subscribe();
  minimum = this.productService.minimum().subscribe();

}
