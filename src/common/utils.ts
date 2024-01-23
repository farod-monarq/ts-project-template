import { google } from "../generated/google/protobuf/any";

export function createAnyMessage<T>(data: T, typeUrl: string = 'type.googleapis.com/google.protobuf.Struct'): google.protobuf.Any {
	const value = Buffer.from(JSON.stringify(data));
	return new google.protobuf.Any({ type_url: typeUrl, value });
}