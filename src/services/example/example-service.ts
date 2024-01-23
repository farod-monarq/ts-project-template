import { ServerUnaryCall, sendUnaryData, UntypedHandleCall } from '@grpc/grpc-js';
import { HelloRequest, HelloResponse, UnimplementedExampleServiceService } from '../../generated/example';

// Implémentez le service gRPC
export class ExampleService implements UnimplementedExampleServiceService {
	[method: string]: UntypedHandleCall;
	SayHello(call: ServerUnaryCall<HelloRequest, HelloResponse>, callback: sendUnaryData<HelloResponse>): void {
		const request = call.request;
		const response = new HelloResponse();
		callback(null, response);
	}
}
