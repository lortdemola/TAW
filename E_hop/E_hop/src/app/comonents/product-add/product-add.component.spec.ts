import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostComponent } from './product-add.component';

describe('PostAddComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPostComponent]
    });
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
