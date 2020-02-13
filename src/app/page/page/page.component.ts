import { Component, OnInit } from '@angular/core';
import { VenkatService } from 'src/app/venkat.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(public venkatservice:VenkatService) { }

  ngOnInit(): void {
  }

}
