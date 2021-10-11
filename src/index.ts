import {ConditionMatcher, ConditionMatcherContext, ConditionMatcherResult} from 'mf-dynamic-form';


export type OPERATOR = 'EQUALS' | 'NOTEQUALS';

export default class KeyValueConditionMatcher implements ConditionMatcher {
    private readonly field: string;
    private readonly value: any;
    private readonly op: OPERATOR;

    constructor(field: string, value: any, op: OPERATOR) {
        this.field = field;
        this.value = value;
        this.op = op;
    }

    match(context: ConditionMatcherContext): ConditionMatcherResult {

        const fieldName = this.field;
        const expectedValue = this.value;
        const operator: OPERATOR = this.op ? this.op : 'EQUALS';

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
        } as ConditionMatcherResult;
    }
}
