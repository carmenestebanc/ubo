"use strict";
var testing_1 = require("@angular/core/testing");
var list_autocomplete_component_1 = require("./list-autocomplete.component");
describe('ListAutocompleteComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [list_autocomplete_component_1.ListAutocompleteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(list_autocomplete_component_1.ListAutocompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-autocomplete.component.spec.js.map