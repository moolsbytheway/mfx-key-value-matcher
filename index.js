"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValueConditionMatcher {
    constructor(field, value, op, targetFormGroup) {
        this.field = field;
        this.value = value;
        this.op = op;
        this.targetFormGroup = targetFormGroup;
    }
    match(context) {
        const fieldName = this.field;
        const expectedValue = this.value;
        const operator = this.op ? this.op : 'EQUALS';
        const targetFormGroup = this.targetFormGroup || context.formGroup;
        const operatorMatchesValues = value => {
            if (operator == 'EQUALS') {
                return value == expectedValue;
            }
            return value != expectedValue;
        };
        const currentValue = targetFormGroup.get(fieldName).value;
        return {
            matched: operatorMatchesValues(currentValue),
            fields: [fieldName],
            targetFormGroup: targetFormGroup
        };
    }
}
exports.default = KeyValueConditionMatcher;
