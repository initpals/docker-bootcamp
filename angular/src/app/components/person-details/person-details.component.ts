import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Person-details',
  templateUrl: './Person-details.component.html',
  styleUrls: ['./Person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  currentPerson = null;
  message = '';

  constructor(
    private PersonService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getPerson(this.route.snapshot.paramMap.get('id'));
  }

  getPerson(id) {
    this.PersonService.get(id)
      .subscribe(
        data => {
          this.currentPerson = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      name: this.currentPerson.name
    };

    this.PersonService.update(this.currentPerson.id, data)
      .subscribe(
        response => {
          this.currentPerson.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatePerson() {
    this.PersonService.update(this.currentPerson.id, this.currentPerson)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Person was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

 
}
