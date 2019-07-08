import { TestBed, async } from '@angular/core/testing';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AboutComponent } from './about.component';
import { NsButtunModule } from '@ns-components/index';
import { MetaDataService } from '../../services/metaData/metaData.service';
import { NavLinks } from '../../services/navLinks/navLinks.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
describe('AboutComponent', function () {
    var component, fixture, metaDataService;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [NsButtunModule, LazyLoadImageModule],
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
            declarations: [AboutComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AboutComponent);
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
                title: "Compute more with less power | Next Silicon",
                description: "We believe in a smarter future and want to create new opportunities for innovation."
            };
            jest.spyOn(component.metaData, 'setMetaData').mockImplementation();
            component.ngOnInit();
            expect(component.metaData.setMetaData).toHaveBeenCalledWith(metaData);
        });
    });
});
//# sourceMappingURL=about.component.spec.js.map