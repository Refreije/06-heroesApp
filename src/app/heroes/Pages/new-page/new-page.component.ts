import { Component } from '@angular/core';
import { Publisher, Hero } from '../../interfaces/hero.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {
  public herFrom = new FormGroup({
  id:               new FormControl<string>(''),
  superhero:        new FormControl<string>('', {nonNullable: true}),
  publisher:        new FormControl<Publisher>(Publisher.DCComics),
  alter_ego:        new FormControl(''),
  first_appearance: new FormControl(''),
  characters:       new FormControl(''),
  alt_img:          new FormControl('')
  })

  public publishers = [
      {id: 'DC Comics', desc:'DC-Comics'},
      {id: 'Marvel Comics', desc:'Marvel-Comics'}
  ];



  onSubmit():void {

    console.log({formIsValid: this.herFrom.valid,
      value: this.herFrom.getRawValue()
    })
  }
}
