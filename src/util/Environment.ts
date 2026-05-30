import { loadWorldConfig } from '#/util/WorldConfig.js';
import { WalkTriggerSetting } from '#/engine/entity/WalkTriggerSetting.js';

const config = loadWorldConfig();

export default {
    runtime: {
        isBun: typeof process.versions.bun !== 'undefined',
        maxNpcs: 16383
    },
    NODE_MAX_PLAYERS: config.node.maxConnected,
    NODE_MAX_NPCS: 16383,
    NODE_DEBUG_SOCKET: config.node.debug,
    NODE_MEMBERS: config.node.members,
    NODE_DEBUG: config.node.debug,
    NODE_PRODUCTION: config.node.production,
    NODE_DEBUG_PROFILE: config.node.debugProfile,
    NODE_CLIENT_ROUTEFINDER: config.node.clientRoutefinder,
    NODE_WALKTRIGGER_SETTING: WalkTriggerSetting.PLAYERPACKET,
    NODE_ID: config.node.id,
    NODE_RATELIMIT_ADDRESS_LOGIN: config.node.rateLimitAddressLogin,
    NODE_RATELIMIT_DEVICE_LOGIN: config.node.rateLimitDeviceLogin,
    NODE_MAX_CONNECTED: config.node.maxConnected,
    NODE_MINIMUM_WEALTH_VALUE_EVENT: config.node.minimumWealthValueEvent,
    BUILD_STARTUP: config.build.startup,
    BUILD_SRC_DIR: config.build.srcDir,
    WEB_PORT: config.web.port,
    ENGINE_REVISION: config.engine.revision,
    ...config
};
