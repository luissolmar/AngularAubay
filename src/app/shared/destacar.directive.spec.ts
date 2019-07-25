import { DestacarDirective } from './destacar.directive';
import { Component, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser'
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

@Component({
  template:`<p id="test" destacar></p>`
})
  class TestComponent{}

describe('DestacarDirective', () => {
  //let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elem: ElementRef

  beforeEach(async(() => {
    TestBed.configureTestingModule({   
      declarations: [
        TestComponent,
        DestacarDirective
      ],
      imports: [
        //NgbModule,
        //FormsModule
      ]
    })
    .compileComponents();
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    //component = fixture.componentInstance;
    fixture.detectChanges();
    elem = fixture.debugElement.query(By.css('#test'))
  })
  it('should create an instance', () => {
    const directive = new DestacarDirective(elem);
    expect(directive).toBeTruthy();
  })
  
});