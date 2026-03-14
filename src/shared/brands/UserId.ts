declare const __brand: unique symbol;

export type UserId = string & { [__brand]: 'UserId' };