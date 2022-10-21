
 
import Card from './src/index.vue';
 
Card.install = function(Vue) {
  Vue.component(Card.name, Card);
};
 
export default Card;
export * from './src/index.vue';