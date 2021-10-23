import { ConditionMatcher, ConditionMatcherContext, ConditionMatcherResult } from 'mf-dynamic-form';
export declare type OPERATOR = 'EQUALS' | 'NOTEQUALS';
export default class KeyValueConditionMatcher implements ConditionMatcher {
    private readonly field;
    private readonly value;
    private readonly op;
    private readonly targetFormGroup;
    constructor(field: string, value: any, op: OPERATOR, targetFormGroup?: any);
    match(context: ConditionMatcherContext): ConditionMatcherResult;
}
