import { Component, computed, signal } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero-page',
    templateUrl: './hero-page.html'
})
export class HeroPageComponent {
  name = signal("Ironman");
  age = signal(45);

  heroDescription = computed( () => {
    const description = `${ this.name() } - ${ this.age() }`;
    return description;
  });

  capitalizeName = computed( () => this.name().toUpperCase() );

  getHeroDescription() {
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero(): void {
    this.name.set("Spiderman");
    this.age.set(30);
  }

  resetForm() {
    this.name.set("Ironman");
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }


}
