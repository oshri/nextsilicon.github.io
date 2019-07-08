import { TestBed } from '@angular/core/testing';
import { NavLinks } from './navLinks.service';
import { combineReducers, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import * as layoutReducer from '../../reducers/layout.reducer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
describe('NavLinks service', function () {
    var service;
    var NAV_LINKS_MOCK = {
        links: [
            {
                display: 'About',
                scrollTo: true,
                target: 'about'
            },
            {
                display: 'Jobs',
                scrollTo: true,
                target: 'jobs'
            }
        ]
    };
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                StoreModule.forRoot({
                    core: combineReducers(layoutReducer.reducer)
                })
            ],
            providers: [NavLinks],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
    });
    beforeEach(function () {
        service = TestBed.get(NavLinks);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    describe('set and get NavLinks', function () {
        it('should set links to nav', function (done) {
            service.setLinks(NAV_LINKS_MOCK.links);
            service.getLinks().subscribe(function (navLinks) {
                expect(navLinks).toEqual(NAV_LINKS_MOCK);
                expect(navLinks.links.length).toBe(2);
                done();
            });
        });
    });
});
//# sourceMappingURL=navLinks.service.spec.js.map