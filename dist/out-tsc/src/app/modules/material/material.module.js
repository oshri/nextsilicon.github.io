import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatCardModule, MatDialogConfig, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatSelectModule } from '@angular/material';
var materialModules = [
    DragDropModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule].concat(materialModules),
            providers: [
                {
                    provide: MAT_DIALOG_DEFAULT_OPTIONS,
                    useValue: tslib_1.__assign({}, new MatDialogConfig(), { minWidth: '250px' })
                }
            ],
            exports: materialModules
        })
    ], MaterialModule);
    return MaterialModule;
}());
export { MaterialModule };
//# sourceMappingURL=material.module.js.map