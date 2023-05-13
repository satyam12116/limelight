import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFurnitureComponent } from './get-furniture.component';

describe('GetFurnitureComponent', () => {
  let component: GetFurnitureComponent;
  let fixture: ComponentFixture<GetFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
