"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValueConditionMatcher {
    constructor(field, value, op) {
        this.field = field;
        this.value = value;
        this.op = op;
    }
    match(context) {
        const fieldName = this.field;
        const expectedValue = this.value;
        const operator = this.op ? this.op : 'EQUALS';
        const operatorMatchesValues = value => {
            if (operator == 'EQUALS') {
                return value == expectedValue;
            }
            return value != expectedValue;
        };
        const currentValue = context.formGroup.get(fieldName).value;
        return {
            matched: operatorMatchesValues(currentValue),
            fields: [fieldName]
        };
    }
}
exports.default = KeyValueConditionMatcher;
