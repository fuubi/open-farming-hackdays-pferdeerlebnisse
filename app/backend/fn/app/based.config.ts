import { BasedFunctionConfig } from '@colombalink/based-functions'

import { createReadStream, existsSync } from 'fs';
import path from 'path';

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript'
};

export const httpResponse = async (based, payload, d, send) => {
    console.log(payload);

    // Resolve file path
    const filePath = path.join(__dirname, payload.file);

    // Check if file exists
    if (!existsSync(filePath)) {
        send('File not found', { ['content-type']: 'text/plain' }, 404);
        return;
    }

    // Get the file extension
    const ext = path.extname(filePath);

    // Determine the correct Content-Type
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Serve the file
    send(createReadStream(filePath), {
        ['content-type']: contentType
    });
};


export default {
  name: 'ui:app',
  type: 'function',
  path: '/ui/app/:file',
  httpResponse,
} as BasedFunctionConfig<'function'>



