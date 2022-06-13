import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSistemaComponent } from './app-sistema.component';

describe('AppSistemaComponent', () => {
  let component: AppSistemaComponent;
  let fixture: ComponentFixture<AppSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
