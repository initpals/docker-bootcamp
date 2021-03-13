import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-Person',
  templateUrl: './add-Person.component.html',
  styleUrls: ['./add-Person.component.css']
})
export class AddPersonComponent implements OnInit {
  Person = {
    name: ''
  };
  submitted = false;

  constructor(private PersonService: PersonService) { }

  ngOnInit() {
  }

  savePerson() {
    const data = {
      name: this.Person.name
    };

    this.PersonService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPerson() {
    this.submitted = false;
    this.Person = {
      name: ''
    };
  }

}
