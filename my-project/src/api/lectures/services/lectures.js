'use strict';

/**
 * lectures service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lectures.lectures');
