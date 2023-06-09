import {PRODUCTION_DEPLOYMENT_KEY, STAGING_DEPLOYMENT_KEY} from '@env';

export let CODEPUSH_DEPLOYMENT_KEY;

const STAGING = true;

if (STAGING) {
  CODEPUSH_DEPLOYMENT_KEY = STAGING_DEPLOYMENT_KEY;
}

const PROD = false;

if (PROD) {
  CODEPUSH_DEPLOYMENT_KEY = PRODUCTION_DEPLOYMENT_KEY;
}
