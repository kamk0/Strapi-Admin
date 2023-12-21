'use strict';

/**
 * pagess service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pagess.pagess');
