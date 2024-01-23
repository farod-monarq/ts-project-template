// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var operator_pb = require('./operator_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_operator_Account(arg) {
  if (!(arg instanceof operator_pb.Account)) {
    throw new Error('Expected argument of type operator.Account');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operator_Account(buffer_arg) {
  return operator_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operator_AccountListRequest(arg) {
  if (!(arg instanceof operator_pb.AccountListRequest)) {
    throw new Error('Expected argument of type operator.AccountListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operator_AccountListRequest(buffer_arg) {
  return operator_pb.AccountListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operator_AccountListResponse(arg) {
  if (!(arg instanceof operator_pb.AccountListResponse)) {
    throw new Error('Expected argument of type operator.AccountListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operator_AccountListResponse(buffer_arg) {
  return operator_pb.AccountListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Definition of the Operator service
var OperatorServiceService = exports.OperatorServiceService = {
  // Method to get a list of accounts
getAccountList: {
    path: '/operator.OperatorService/GetAccountList',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.AccountListRequest,
    responseType: operator_pb.AccountListResponse,
    requestSerialize: serialize_operator_AccountListRequest,
    requestDeserialize: deserialize_operator_AccountListRequest,
    responseSerialize: serialize_operator_AccountListResponse,
    responseDeserialize: deserialize_operator_AccountListResponse,
  },
  // Method to get a list of accounts in streaming
streamAccountList: {
    path: '/operator.OperatorService/StreamAccountList',
    requestStream: false,
    responseStream: true,
    requestType: operator_pb.AccountListRequest,
    responseType: operator_pb.Account,
    requestSerialize: serialize_operator_AccountListRequest,
    requestDeserialize: deserialize_operator_AccountListRequest,
    responseSerialize: serialize_operator_Account,
    responseDeserialize: deserialize_operator_Account,
  },
};

exports.OperatorServiceClient = grpc.makeGenericClientConstructor(OperatorServiceService);
