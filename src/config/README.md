# Config
- Imported by `src/stores/config.store.ts`
- `base.config.js` applied first then `[process.env.NODE_ENV].config.js`
- `development.config.js` is applied second in absence of `process.env.NODE_ENV`
- Available to components by injecting `'configStore'` and accessing `this.props.configStore.config`