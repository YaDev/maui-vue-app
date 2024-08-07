
declare module "*.vue";

export type JsonReviver = ((key: any, value: any) => any);

export enum JSCallResultType {
  Default = 0,
  JSObjectReference = 1,
  JSStreamReference = 2,
  JSVoidResult = 3,
}


export interface DotNetCallDispatcher {
  invokeDotNetFromJS?(assemblyName: string | null, methodIdentifier: string, dotNetObjectId: number | null, argsJson: string): string | null;
  beginInvokeDotNetFromJS(callId: number, assemblyName: string | null, methodIdentifier: string, dotNetObjectId: number | null, argsJson: string): void;
  endInvokeJSFromDotNet(callId: number, succeeded: boolean, resultOrError: any): void;
  sendByteArray(id: number, data: Uint8Array): void;
}

export interface ICallDispatcher {
  invokeJSFromDotNet(identifier: string, argsJson: string, resultType: JSCallResultType, targetInstanceId: number): string | null;
  beginInvokeJSFromDotNet(asyncHandle: number, identifier: string, argsJson: string | null, resultType: JSCallResultType, targetInstanceId: number): void;
  endInvokeDotNetFromJS(asyncCallId: string, success: boolean, resultJsonOrExceptionMessage: string): void;
  invokeDotNetStaticMethod<T>(assemblyName: string, methodIdentifier: string, ...args: any[]): T;
  invokeDotNetStaticMethodAsync<T>(assemblyName: string, methodIdentifier: string, ...args: any[]): Promise<T>;
  receiveByteArray(id: number, data: Uint8Array): void
  supplyDotNetStream(streamId: number, stream: ReadableStream): void;
}

interface JsDotNet {
  invokeMethodAsync: (assembly: string, method: string, ...arg: any[]) => Promise<T>;
  invokeMethod: (assembly: string, method: string, ...arg: any[]) => T;
  createJSObjectReference: (jsObject: any) => any;
  attachReviver: (reviver: JsonReviver) => void;
  attachDispatcher: (dotNetCallDispatcher: DotNetCallDispatcher) => ICallDispatcher;
  createJSStreamReference: (streamReference: ArrayBuffer | ArrayBufferView | Blob | any) => any;
  disposeJSObjectReference: (jsObjectReference: any) => void;
  disposeJSObjectReferenceById: (id: number) => void;
  findJSFunction: (identifier: string, targetInstanceId: number) => Function;
}


interface JsBlazor {
  start: () => Promise<void>;
}



declare global {
  interface Window {
    DotNet: JsDotNet,
    Blazor: JsBlazor
  };
}

export { };