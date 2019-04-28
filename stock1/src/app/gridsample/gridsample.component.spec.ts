import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsampleComponent } from './gridsample.component';
import { IgxGridModule } from 'igniteui-angular';

describe('GridsampleComponent', () => {
  let component: GridsampleComponent;
  let fixture: ComponentFixture<GridsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsampleComponent ],
      imports: [ IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
