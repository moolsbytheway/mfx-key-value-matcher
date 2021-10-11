import { ConditionMatcher, ConditionMatcherContext, ConditionMatcherResult } from 'mf-dynamic-form';
export declare type OPERATOR = 'EQUALS' | 'NOTEQUALS';
export default class KeyValueConditionMatcher implements ConditionMatcher {
    private readonly field;
    private readonly value;
    private readonly op;
    constructor(field: string, value: any, op: OPERATOR);
    match(context: ConditionMatcherContext): ConditionMatcherResult;
}
