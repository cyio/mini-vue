import { compile } from './compiler/compile';
import {
  createApp,
  render,
  h,
  Text,
  Fragment,
  nextTick,
  renderList,
  withModel,
  resolveComponent
} from './runtime';
import { reactive, ref, computed, effect } from './reactivity';

export const MiniVue = (window.Vue = {
  createApp,
  render,
  h,
  Text,
  Fragment,
  nextTick,
  reactive,
  ref,
  computed,
  effect,
  compile,
  renderList,
  withModel,
  resolveComponent
});
