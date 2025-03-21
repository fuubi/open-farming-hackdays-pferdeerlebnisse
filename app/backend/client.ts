// This file is auto-generated. Do not edit manually.

import { FnType as FnType1 } from './fn/app/based.config.js';
import { FnType as FnType2 } from './fn/hello/based.config.js';
import { FnType as FnType3 } from './fn/users/list-all/based.config.js';





// Mapping interface between method names and their corresponding functions
type BasedFunctions =  FnType1 & FnType2;

export type BasedQueryFunctions =  FnType3;

import { BasedClient } from '@colombalink/based-client';
// @ts-ignore
export abstract class BackendClient extends BasedClient<BasedFunctions, BasedQueryFunctions> { }

import { BasedServerFunctionClient } from '@colombalink/based-server-cloud'

// @ts-ignore
export abstract class  BackendBasedServerFunctionClient extends BasedServerFunctionClient<BasedFunctions, BasedQueryFunctions> { }


