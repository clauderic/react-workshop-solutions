// CodeSandbox doesn't like dynamic imports, so we need to require these ahead of time
const solutions = {
  'component': require('./component'),
  'events-state': require('./events-state'),
  'lifecycle-mount': require('./lifecycle-mount'),
  'lifecycle-unmount': require('./lifecycle-unmount'),
  'lifting-state-up': require('./lifting-state-up'),
  'lists': require('./lists'),
  'refs': require('./refs'),
};

export default solutions;
