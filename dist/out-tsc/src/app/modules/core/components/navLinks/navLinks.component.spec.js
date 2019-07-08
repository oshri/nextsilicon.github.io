import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavLinks } from '@ns-core/services/navLinks/navLinks.service';
import { NsNavlinksComponent } from './navLinks.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
describe('NsNavlinksComponent', function () {
    var component, fixture, navLinks;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                {
                    provide: NavLinks,
                    useValue: {
                        getLinks: jest.fn()
                    }
                }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [NsNavlinksComponent]
        }).compileComponents();
        navLinks = TestBed.get(NavLinks);
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NsNavlinksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create the navLiks', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=navLinks.component.spec.js.map