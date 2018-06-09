"use strict";
var testing_1 = require("@angular/core/testing");
var categorias_component_1 = require("./categorias.component");
describe('ProveedoresComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [categorias_component_1.CategoriasComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(categorias_component_1.CategoriasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=categorias.component.spec.js.map