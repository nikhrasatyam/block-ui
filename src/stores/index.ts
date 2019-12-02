// Import all created stores
import ConfigStore from './config.store';
import RouterStore from './router.store';
import BlockStore from './block.store';
import UiStore from './ui.store';

const routerStore: RouterStore = new RouterStore();
const configStore: ConfigStore = new ConfigStore();
const blockStore: BlockStore = new BlockStore();
const uiStore: UiStore = new UiStore();

// Export all stores together as default
const stores = {
  configStore,
  routerStore,
  blockStore,
  uiStore,
};

export default stores;
