// This file is auto-generated. Do not edit manually.

import { FnType as FnType1 } from './fn/admin/get/based.config.js';
import { FnType as FnType2 } from './fn/app/based.config.js';
import { FnType as FnType3 } from './fn/db/get/based.config.js';
import { FnType as FnType4 } from './fn/db/getAll/based.config.js';
import { FnType as FnType5 } from './fn/db/init/based.config.js';
import { FnType as FnType6 } from './fn/gpx/based.config.js';
import { FnType as FnType7 } from './fn/guest/get/based.config.js';
import { FnType as FnType8 } from './fn/guest/getRoutes/based.config.js';
import { FnType as FnType9 } from './fn/hello/based.config.js';





// Mapping interface between method names and their corresponding functions
type BasedFunctions =  FnType1 & FnType2 & FnType3 & FnType5 & FnType6 & FnType7 & FnType8 & FnType9;

export type BasedQueryFunctions =  FnType4;

import { BasedClient } from '@colombalink/based-client';
// @ts-ignore
export abstract class BackendClient extends BasedClient<BasedFunctions, BasedQueryFunctions> { }

import { BasedServerFunctionClient } from '@colombalink/based-server-cloud'

// @ts-ignore
export abstract class  BackendBasedServerFunctionClient extends BasedServerFunctionClient<BasedFunctions, BasedQueryFunctions> { }


