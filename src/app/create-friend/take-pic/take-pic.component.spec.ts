import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakePicComponent } from './take-pic.component';

describe('TakePicComponent', () => {
  let component: TakePicComponent;
  let fixture: ComponentFixture<TakePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakePicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
