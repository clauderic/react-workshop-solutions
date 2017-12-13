import Components from './component';
import EventsState from './events-state';
import LifecycleMount from './lifecycle-mount';
import LifecycleUnmount from './lifecycle-unmount';
import LiftingStateUp from './lifting-state-up';
import Lists from './lists';
import Refs from './refs';
import Forms from './forms';

const SOLUTIONS = {
  component: Components,
  'events-state': EventsState,
  'lifecycle-mount': LifecycleMount,
  'lifecycle-unmount': LifecycleUnmount,
  'lifting-state-up': LiftingStateUp,
  lists: Lists,
  refs: Refs,
  forms: Forms,
};

export default SOLUTIONS;
