import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-Persons-list',
  templateUrl: './Persons-list.component.html',
  styleUrls: ['./Persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  Persons: any;
  currentPerson = null;
  currentIndex = -1;
  name = '';

  constructor(private PersonService: PersonService) { }

  ngOnInit() {
    this.retrievePersons();
  }

  retrievePersons() {
    this.PersonService.getAll()
      .subscribe(
        data => {
          this.Persons = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrievePersons();
    this.currentPerson = null;
    this.currentIndex = -1;
  }

  setActivePerson(Person, index) {
    this.currentPerson = Person;
    this.currentIndex = index;
  }

  removeAllPersons() {
    this.PersonService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.PersonService.findByTitle(this.name)
      .subscribe(
        data => {
          this.Persons = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deletePerson(id) {
    this.PersonService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrievePersons();
        },
        error => {
          console.log(error);
        });
  }
}
