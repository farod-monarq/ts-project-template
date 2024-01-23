/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: example.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export class HelloRequest extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        name?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
        }
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        name?: string;
    }): HelloRequest {
        const message = new HelloRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        return message;
    }
    toObject() {
        const data: {
            name?: string;
        } = {};
        if (this.name != null) {
            data.name = this.name;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name.length)
            writer.writeString(1, this.name);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HelloRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HelloRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HelloRequest {
        return HelloRequest.deserialize(bytes);
    }
}
export class HelloResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        greeting?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("greeting" in data && data.greeting != undefined) {
                this.greeting = data.greeting;
            }
        }
    }
    get greeting() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set greeting(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        greeting?: string;
    }): HelloResponse {
        const message = new HelloResponse({});
        if (data.greeting != null) {
            message.greeting = data.greeting;
        }
        return message;
    }
    toObject() {
        const data: {
            greeting?: string;
        } = {};
        if (this.greeting != null) {
            data.greeting = this.greeting;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.greeting.length)
            writer.writeString(1, this.greeting);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HelloResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HelloResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.greeting = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): HelloResponse {
        return HelloResponse.deserialize(bytes);
    }
}
interface GrpcUnaryServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
}
interface GrpcStreamServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
}
interface GrpWritableServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
}
interface GrpcChunkServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
}
interface GrpcPromiseServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
    (message: P, options?: grpc_1.CallOptions): Promise<R>;
}
export abstract class UnimplementedExampleServiceService {
    static definition = {
        SayHello: {
            path: "/ExampleService/SayHello",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: HelloRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => HelloRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: HelloResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => HelloResponse.deserialize(new Uint8Array(bytes))
        }
    };
    [method: string]: grpc_1.UntypedHandleCall;
    abstract SayHello(call: grpc_1.ServerUnaryCall<HelloRequest, HelloResponse>, callback: grpc_1.sendUnaryData<HelloResponse>): void;
}
export class ExampleServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedExampleServiceService.definition, "ExampleService", {}) {
    constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
        super(address, credentials, options);
    }
    SayHello: GrpcUnaryServiceInterface<HelloRequest, HelloResponse> = (message: HelloRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<HelloResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<HelloResponse>, callback?: grpc_1.requestCallback<HelloResponse>): grpc_1.ClientUnaryCall => {
        return super.SayHello(message, metadata, options, callback);
    };
}
