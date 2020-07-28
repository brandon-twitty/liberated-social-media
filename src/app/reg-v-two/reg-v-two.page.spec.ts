import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegVTwoPage } from './reg-v-two.page';

describe('RegVTwoPage', () => {
  let component: RegVTwoPage;
  let fixture: ComponentFixture<RegVTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegVTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegVTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
