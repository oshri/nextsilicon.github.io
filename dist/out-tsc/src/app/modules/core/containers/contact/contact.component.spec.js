import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { TestBed, async } from '@angular/core/testing';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';
import { NsButtunModule } from '@ns-components/index';
import { MetaDataService } from '../../services/metaData/metaData.service';
import { NavLinks } from '../../services/navLinks/navLinks.service';
describe('ContactComponent', function () {
    var component, fixture, metaDataService;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [NsButtunModule, RouterTestingModule, LazyLoadImageModule],
            providers: [
                {
                    provide: MetaDataService,
                    useValue: {
                        setMetaData: jest.fn()
                    }
                },
                {
                    provide: NavLinks,
                    useValue: {
                        setLinks: jest.fn()
                    }
                }
            ],
            declarations: [ContactComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        metaDataService = TestBed.get(MetaDataService);
        fixture.detectChanges();
    });
    it('should create the app', function () {
        expect(component).toBeTruthy();
        expect(fixture).toMatchSnapshot();
    });
    describe('ngOnInit', function () {
        it('should set the right metaData', function () {
            var metaData = {
                title: "There's always room at the top | Next Silicon",
                description: "we're in stealth mode"
            };
            jest.spyOn(component.metaData, 'setMetaData').mockImplementation();
            component.ngOnInit();
            expect(component.metaData.setMetaData).toHaveBeenCalledWith(metaData);
        });
    });
});
//# sourceMappingURL=contact.component.spec.js.map