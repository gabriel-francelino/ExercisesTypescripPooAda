import {Dog} from './entity/Dog';
import {Bird} from './entity/Bird';

const dog = new Dog("Dog", "Bulldog", "Land", 4);
const bird = new Bird(true, "Canary", "Air");

dog.makeSound();
dog.move();
bird.makeSound();
bird.move();