import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import { logger } from './logger/logger.meta-reducer';
export var metaReducers = !environment.production ? [logger, storeFreeze] : [];
//# sourceMappingURL=index.js.map