import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImagemComponent } from './list-imagem.component';

describe('ListImagemComponent', () => {
  let component: ListImagemComponent;
  let fixture: ComponentFixture<ListImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListImagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
