// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mock_pb = require('./mock_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_mock_GameEventResponse(arg) {
  if (!(arg instanceof mock_pb.GameEventResponse)) {
    throw new Error('Expected argument of type mock.GameEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mock_GameEventResponse(buffer_arg) {
  return mock_pb.GameEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mock_GameSessionMock(arg) {
  if (!(arg instanceof mock_pb.GameSessionMock)) {
    throw new Error('Expected argument of type mock.GameSessionMock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mock_GameSessionMock(buffer_arg) {
  return mock_pb.GameSessionMock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mock_Task(arg) {
  if (!(arg instanceof mock_pb.Task)) {
    throw new Error('Expected argument of type mock.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mock_Task(buffer_arg) {
  return mock_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}


// Definition of the Mock service
var MockServiceService = exports.MockServiceService = {
  simulateGameSession: {
    path: '/mock.MockService/SimulateGameSession',
    requestStream: false,
    responseStream: false,
    requestType: mock_pb.GameSessionMock,
    responseType: mock_pb.Task,
    requestSerialize: serialize_mock_GameSessionMock,
    requestDeserialize: deserialize_mock_GameSessionMock,
    responseSerialize: serialize_mock_Task,
    responseDeserialize: deserialize_mock_Task,
  },
  streamGameEvents: {
    path: '/mock.MockService/StreamGameEvents',
    requestStream: false,
    responseStream: true,
    requestType: mock_pb.GameSessionMock,
    responseType: mock_pb.GameEventResponse,
    requestSerialize: serialize_mock_GameSessionMock,
    requestDeserialize: deserialize_mock_GameSessionMock,
    responseSerialize: serialize_mock_GameEventResponse,
    responseDeserialize: deserialize_mock_GameEventResponse,
  },
};

exports.MockServiceClient = grpc.makeGenericClientConstructor(MockServiceService);
