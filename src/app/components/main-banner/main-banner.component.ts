import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {


  @Input()
  bannerImage1:string=""
  @Input()
  bannerImage2:string=""
  @Input()
  titleBanner:string=""
  @Input()
  buttonBannerText:string=""
  
  constructor() { }

  ngOnInit(): void {
  }

}
