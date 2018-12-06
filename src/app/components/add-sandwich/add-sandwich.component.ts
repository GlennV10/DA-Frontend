import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { SandwichesService } from '../../services/sandwiches.service';

@Component({
   selector: 'app-add-sandwich',
   templateUrl: './add-sandwich.component.html',
   styleUrls: ['./add-sandwich.component.css']
})
export class AddSandwichComponent implements OnInit {
   private form: FormGroup;

   constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private sandwichService: SandwichesService
   ) {
      this.form = formBuilder.group({
         name: new FormControl('name'),
         ingredients: new FormControl('ingredients'),
         price: new FormControl('price')
      });
   }

   ngOnInit() {}

   addSandwich() {
      let sandwich = {
         name: this.form.value.name,
         ingredients: this.form.value.ingredients,
         price: this.form.value.price
      };

      this.sandwichService.addSandwich(sandwich)
         .subscribe((res) => {
            this.router.navigate(['/admin/sandwiches']);
         });
   }

}
