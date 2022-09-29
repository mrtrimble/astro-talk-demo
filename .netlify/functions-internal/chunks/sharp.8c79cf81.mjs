import sharp from 'sharp';
import { B as BaseSSRService, u as isOutputFormatSupportsAlpha } from '../entry.mjs';
import '@astrojs/netlify/netlify-functions.js';
import 'react';
import 'react-dom/server';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'mime';
import 'kleur/colors';
import 'image-size';
import 'node:fs/promises';
import 'node:url';
import 'node:worker_threads';
import 'os';
import 'web-streams-polyfill';
import 'worker_threads';
import 'node:fs';
import 'module';
/* empty css                       */import 'react/jsx-runtime';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

class SharpService extends BaseSSRService {
  async transform(inputBuffer, transform) {
    const sharpImage = sharp(inputBuffer, { failOnError: false, pages: -1 });
    sharpImage.rotate();
    if (transform.width || transform.height) {
      const width = transform.width && Math.round(transform.width);
      const height = transform.height && Math.round(transform.height);
      sharpImage.resize({
        width,
        height,
        fit: transform.fit,
        position: transform.position,
        background: transform.background
      });
    }
    if (transform.format) {
      sharpImage.toFormat(transform.format, { quality: transform.quality });
      if (transform.background && !isOutputFormatSupportsAlpha(transform.format)) {
        sharpImage.flatten({ background: transform.background });
      }
    }
    const { data, info } = await sharpImage.toBuffer({ resolveWithObject: true });
    return {
      data,
      format: info.format
    };
  }
}
const service = new SharpService();
var sharp_default = service;

export { sharp_default as default };
