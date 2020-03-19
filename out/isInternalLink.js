"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInternalLink = function (link) { return /^\/(?!\/)/.test(link); };
