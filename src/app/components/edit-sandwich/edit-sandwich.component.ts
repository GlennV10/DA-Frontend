import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SandwichesService } from '../../services/sandwiches.service';

@Component({
  selector: 'app-edit-sandwich',
  templateUrl: './edit-sandwich.component.html',
  styleUrls: ['./edit-sandwich.component.css']
})
export class EditSandwichComponent implements OnInit {
  private sandwich: Object;

  constructor(
    private router: Router,
    private sandwichService: SandwichesService
  ) { }

  ngOnInit() {
    if (this.sandwichService.selectedSandwich === null) this.router.navigate(['/admin/sandwiches']);
    this.sandwich = this.sandwichService.selectedSandwich;
  }

  updateSandwich() {
    this.sandwichService.updateSandwich(this.sandwich)
      .subscribe((res) => {
        this.router.navigate(['/admin/sandwiches']);
      });
  }

}
