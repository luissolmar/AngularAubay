import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let title = 'Curso angular Aubay'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, MenuComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title `Angular Aubay`', () => {
    //const compiled = fixture.debugElement.nativeElement
    expect(component.title).toEqual(title);
  });
  //it('should have a title Angular Aubay', () => {
//    const view= fixture.debugElement.nativeElement
  //  expect(compiled.querySelector('h1').textContent).toContain('Angular Aubay');
  //});
});
