import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner-highlight',
  templateUrl: './home-banner-highlight.component.html',
  styleUrls: ['./home-banner-highlight.component.css']
})
export class HomeBannerHighlightComponent implements OnInit {
  @Input()
  bannerImage:string=""
  @Input()
  titleBanner:string=""
  @Input()
  buttonBannerText:string=""
  @Input()
  textBanner:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
