import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  /** Based on the screen size, switch from standard to one column per row */

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  }

}
