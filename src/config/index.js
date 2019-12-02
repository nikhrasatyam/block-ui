
import { merge as _merge } from 'lodash';
import BaseConfig from './base.config';

export default _merge({}, BaseConfig, require(`../config/${process.env.NODE_ENV || 'development'}.config`).default);
