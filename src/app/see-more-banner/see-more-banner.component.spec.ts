import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMoreBannerComponent } from './see-more-banner.component';

describe('SeeMoreBannerComponent', () => {
  let component: SeeMoreBannerComponent;
  let fixture: ComponentFixture<SeeMoreBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeMoreBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeMoreBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
