'use strict';

/**
 * data-student service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-student.data-student');
