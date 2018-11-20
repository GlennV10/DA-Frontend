import { Component, OnInit } from '@angular/core';

import { SandwichesService } from '../../services/sandwiches.service';

@Component({
  selector: 'app-sandwiches',
  templateUrl: './sandwiches.component.html',
  styleUrls: ['./sandwiches.component.css']
})
export class SandwichesComponent implements OnInit {
  private sandwiches: Object[];

  constructor(
    private sandwichService: SandwichesService
  ) { }

  ngOnInit() {
    this.getSandwiches();
  }

  getSandwiches() {
    this.sandwichService.getSandwiches()
      .subscribe(sandwiches => {
        console.log(sandwiches);
        this.sandwiches = sandwiches;
      });
  }

}
