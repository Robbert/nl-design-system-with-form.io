export const pick = (object, props) => {
  let picked = {};

  props.forEach((prop) => {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      picked[prop] = object[prop];
    }
  });

  return picked;
};
