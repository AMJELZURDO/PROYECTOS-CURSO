import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesnpagComponent } from './restaurantesnpag.component';

describe('RestaurantesnpagComponent', () => {
  let component: RestaurantesnpagComponent;
  let fixture: ComponentFixture<RestaurantesnpagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantesnpagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantesnpagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
