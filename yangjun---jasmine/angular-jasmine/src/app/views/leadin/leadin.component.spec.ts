import { LeadInComponent } from './leadIn.component';
import { AppService } from '../../index/app.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('LeadInComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            // provide the component-under-test and dependent service
            providers: [
                LeadInComponent,
                { provide: AppService }
            ]
        });
    });

    it('#clicked() should toggle #isOn', () => {
        const comp = TestBed.get(LeadInComponent);
        expect(comp.isOn).toBe(false, 'off at first');
        comp.clicked();
        expect(comp.isOn).toBe(true, 'on after click');
        comp.clicked();
        expect(comp.isOn).toBe(false, 'off after second click');
    });

    it('#clicked() should set #message to "is on"', () => {
        const comp = TestBed.get(LeadInComponent);
        expect(comp.message).toMatch(/is off/i, 'off at first');
        comp.clicked();
        expect(comp.message).toMatch(/is on/i, 'on after clicked');
        comp.clicked();
        expect(comp.message).toMatch(/is off/i, 'on after clicked');
    });
});

describe('wangzhan examples', () => {
    let component: LeadInComponent;
    let fixture: ComponentFixture<LeadInComponent>;
    let h1: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LeadInComponent],
        });
        fixture = TestBed.createComponent(LeadInComponent);
        component = fixture.componentInstance;
        expect(component).toBeDefined();
        h1 = fixture.nativeElement.querySelector('h1');

    });
});



