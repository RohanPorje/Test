import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestService } from './test.service';

describe('AppComponent', () => {
  let component : AppComponent
  let fixture: ComponentFixture<AppComponent>
  let mockTestService: TestService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[TestService]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    mockTestService = fixture.debugElement.injector.get(TestService)
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testApplication'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testApplication');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testApplication app is running!');
  });

  it('should have test function called',()=>{
    spyOn(mockTestService,'check').and.returnValue(true)
    spyOn(component, 'anotherFunction')
    component.test()
    expect(component.isValueTrue).toBeTrue();
    expect(component.anotherFunction).toHaveBeenCalled()
  })

  it('should create anotherFunction',()=>{
    component.anotherFunction()
    expect(component.isCheckAnother).toBeTrue()
   
  })

  it('should test service', ()=>{
    component.changesStatus();
    expect(mockTestService.isServiceValue).toBeTrue()
  })
});
