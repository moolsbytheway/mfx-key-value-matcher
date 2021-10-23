import {ConditionMatcher, ConditionMatcherContext, ConditionMatcherResult} from 'mf-dynamic-form';


export type OPERATOR = 'EQUALS' | 'NOTEQUALS';

export default class KeyValueConditionMatcher implements ConditionMatcher {
    private readonly field: string;
    private readonly value: any;
    private readonly op: OPERATOR;
    private readonly targetFormGroup: any;

    constructor(field: string, value: any, op: OPERATOR, targetFormGroup?: any) {
        this.field = field;
        this.value = value;
        this.op = op;
        this.targetFormGroup = targetFormGroup;
    }

    match(context: ConditionMatcherContext): ConditionMatcherResult {

        const fieldName = this.field;
        const expectedValue = this.value;
        const operator: OPERATOR = this.op ? this.op : 'EQUALS';
        const targetFormGroup: any = this.targetFormGroup || context.formGroup;

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
        } as ConditionMatcherResult;
    }
}
