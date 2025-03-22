import { BasedFunctionConfig } from '@colombalink/based-functions'
import { createReadStream, existsSync } from 'fs';
import path from 'path';
import fn from './index.js';


export interface FnType {
  'gxp:data': typeof fn
}

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript'
};

export const httpResponse = async (based, payload, d, send) => {
    console.log(payload);
    
    console.log("...")
    // Resolve file path
     const filePath = path.join("/workspaces/clbased-template/app/backend/fn/gpx/", payload.file);
  console.log(filePath)
    // Check if file exists
    if (!existsSync(filePath)) {
        send('File not found', { ['content-type']: 'text/plain' }, 404);
        return;
    }

    // Get the file extension
    const ext = path.extname(filePath);

    send(createReadStream(filePath), {
      'content-type': 'application/gpx+xml',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, OPTIONS',
      'access-control-allow-headers': 'Content-Type'
    });
};


export default {
  name: 'gxp:data',
  type: 'function',
  path: '/gxp/:file',
  httpResponse,
} as BasedFunctionConfig<'function'>



