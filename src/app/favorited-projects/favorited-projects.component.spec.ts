import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritedProjectsComponent } from './favorited-projects.component';

describe('FavoritedProjectsComponent', () => {
  let component: FavoritedProjectsComponent;
  let fixture: ComponentFixture<FavoritedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
