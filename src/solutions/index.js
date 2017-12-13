import component from './component';
import EventsState from './events-state';
import LifecycleMount from './lifecycle-mount';
import LifecycleUnmount from './lifecycle-unmount';
import LiftingStateUp from './lifting-state-up';
import lists from './lists';
import refs from './refs';
import forms from './forms';
import context from './context';

const SOLUTIONS = {
  component,
  'events-state': EventsState,
  'lifecycle-mount': LifecycleMount,
  'lifecycle-unmount': LifecycleUnmount,
  'lifting-state-up': LiftingStateUp,
  lists,
  refs,
  forms,
  context,
};

export default SOLUTIONS;
