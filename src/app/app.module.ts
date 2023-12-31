import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { HomeBannerHighlightComponent } from './home-banner-highlight/home-banner-highlight.component';
import { FooterComponent } from './footer/footer.component';
import { SeeMoreBannerComponent } from './see-more-banner/see-more-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    MainBannerComponent,
    HomeBannerHighlightComponent,
    FooterComponent,
    SeeMoreBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
