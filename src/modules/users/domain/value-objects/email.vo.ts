export class Email {
	private constructor(private readonly value: string) { }

	static create(value: string) {
		if (!value.includes('@')) {
			throw new Error('Invalid email');
		}
		return new Email(value);
	}

	getValue() {
		return this.value;
	}
}
