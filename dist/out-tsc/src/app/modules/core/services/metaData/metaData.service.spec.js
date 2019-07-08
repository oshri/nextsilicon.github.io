import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { MetaDataService } from './metaData.service';
describe('MetaData Service', function () {
    var service;
    var title;
    var meta;
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [MetaDataService]
        });
    });
    beforeEach(function () {
        service = TestBed.get(MetaDataService);
        title = TestBed.get(Title);
        meta = TestBed.get(Meta);
        jest.spyOn(title, 'setTitle');
        jest.spyOn(meta, 'updateTag');
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    describe('Update Page Title', function () {
        it('should call set Title', function () {
            service.setMetaData({
                title: "Angular PWA"
            });
            expect(title.setTitle).toHaveBeenCalledWith('Angular PWA');
        });
    });
});
//# sourceMappingURL=metaData.service.spec.js.map