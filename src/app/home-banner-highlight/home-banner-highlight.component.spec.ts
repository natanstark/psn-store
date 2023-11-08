import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerHighlightComponent } from './home-banner-highlight.component';

describe('HomeBannerHighlightComponent', () => {
  let component: HomeBannerHighlightComponent;
  let fixture: ComponentFixture<HomeBannerHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBannerHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBannerHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
