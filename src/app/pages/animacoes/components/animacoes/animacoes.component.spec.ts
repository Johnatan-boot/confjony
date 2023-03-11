import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacoesComponent } from './animacoes.component';

describe('AnimacoesComponent', () => {
  let component: AnimacoesComponent;
  let fixture: ComponentFixture<AnimacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
