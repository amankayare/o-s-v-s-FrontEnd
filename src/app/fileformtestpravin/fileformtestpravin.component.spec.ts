import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileformtestpravinComponent } from './fileformtestpravin.component';

describe('FileformtestpravinComponent', () => {
  let component: FileformtestpravinComponent;
  let fixture: ComponentFixture<FileformtestpravinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileformtestpravinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileformtestpravinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
