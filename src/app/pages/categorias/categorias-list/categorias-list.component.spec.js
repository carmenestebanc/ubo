"use strict";
var testing_1 = require("@angular/core/testing");
var categorias_list_component_1 = require("./categorias-list.component");
describe('CategoriasListComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [categorias_list_component_1.CategoriasListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(categorias_list_component_1.CategoriasListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=categorias-list.component.spec.js.map