import { TestBed } from '@angular/core/testing';
import { NsSnackBar } from './snackBar.service';
import { MatSnackBarModule } from '@angular/material';
describe('NsSnackBar', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({ imports: [MatSnackBarModule] });
        service = TestBed.get(NsSnackBar);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should open mat-snackbar', function () {
        jest.spyOn(service.snackBar, 'open').mockImplementation();
        service.open('MockMessage', 'MockAction', 2000);
        expect(service.snackBar.open).toHaveBeenCalledWith('MockMessage', 'MockAction', {
            duration: 2000,
            verticalPosition: 'top'
        });
    });
});
//# sourceMappingURL=snackBar.service.spec.js.map