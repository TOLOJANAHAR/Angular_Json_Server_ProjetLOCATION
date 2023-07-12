import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CaracteristiqueService } from '../services/caracteristique.service';
import { Product } from 'model/carac.model';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
   public productForm!: FormGroup;

   constructor(private fb: FormBuilder, private productService: CaracteristiqueService){}
   ngOnInit(){
    this.productForm=this.fb.group({
      id: this.fb.control(''),
      nomLoc: this.fb.control(''),
      designVoiture: this.fb.control(''),
      jour: this.fb.control(''),
      taux: this.fb.control(''),
    })
   }

   saveProduct(){
    let product:Product=this.productForm.value;
    this.productService.saveProduct(product).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      },
      error :err =>{
        console.log(err)
      }
    });
   }
   
}
