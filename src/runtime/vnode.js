import { isArray, isString } from '../utils';

export const ShapeFlags = {
  ELEMENT: 1, // 00000001
  TEXT: 1 << 1, // 00000010
  FRAGMENT: 1 << 2, // 00000100
  COMPONENT: 1 << 3, // 00001000
  TEXT_CHILDREN: 1 << 4, // 00010000
  ARRAY_CHILDREN: 1 << 5, // 00100000
  CHILDREN: (1 << 4) | (1 << 5), //00110000
};

export const Text = Symbol('Text');
export const Fragment = Symbol('Fragment');

/**
 * vnode有四种类型：元素，文本，Fragment，组件
 * @param {string | Text | Fragment | Object} type
 * @param {Object | null} props
 * @param {string | Array | null} children
 * @returns VNode
 */
export function h(type, props = null, children = null) {
  let shapeFlag = 0;
  if (isString(type)) {
    shapeFlag = ShapeFlags.ELEMENT;
  } else if (type === Text) {
    shapeFlag = ShapeFlags.TEXT;
  } else if (type === Fragment) {
    shapeFlag = ShapeFlags.FRAGMENT;
  } else {
    shapeFlag = ShapeFlags.ELEMENT;
  }

  if (isString(children)) {
    shapeFlag |= ShapeFlags.TEXT_CHILDREN;
  } else if (isArray(children)) {
    shapeFlag |= ShapeFlags.ARRAY_CHILDREN;
  }

  return {
    type,
    props,
    children,
    shapeFlag,
  };
}
