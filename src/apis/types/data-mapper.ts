export abstract class DataMapper<Input, Output> {
	abstract map(input: Input): Output;

	abstract mapArray(inputArray: Input[]): Output[];
}

export default DataMapper;
