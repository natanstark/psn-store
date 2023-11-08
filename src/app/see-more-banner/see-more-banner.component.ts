import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-more-banner',
  templateUrl: './see-more-banner.component.html',
  styleUrls: ['./see-more-banner.component.css']
})
export class SeeMoreBannerComponent implements OnInit {

  @Input()
  seeMoreImage:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
