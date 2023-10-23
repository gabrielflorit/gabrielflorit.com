import { modifier } from 'ember-modifier';

export default modifier(
  (element, _, { data }) => {
    console.log(element, data);
  },
  { eager: false }
);
