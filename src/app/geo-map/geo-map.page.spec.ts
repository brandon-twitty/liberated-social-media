import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeoMapPage } from './geo-map.page';

describe('GeoMapPage', () => {
  let component: GeoMapPage;
  let fixture: ComponentFixture<GeoMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeoMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
