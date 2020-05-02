import { Component, OnInit } from '@angular/core';
import {SondageService} from '../../services/sondage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Sondage} from '../../models/Sondage';
import {AuthService} from '../../services/auth.service';
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-edit-sondage',
  templateUrl: './edit-sondage.component.html',
  styleUrls: ['./edit-sondage.component.css']
})
export class EditSondageComponent implements OnInit {
  user: IUser;
  id: string;
  sondage: any;
  sondageForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private sondageService: SondageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.emitUser();
    this.id = this.route.snapshot.params.idSond;
    this.sondageService.getSondage(this.id).subscribe(
      (sondage) => {
        this.sondage = sondage;
        console.log(this.sondage);
      }
    );
    this.user = this.sondageService.getUser();
    this.initForm();
  }

  initForm() {
    this.sondageForm = this.formBuilder.group({
      resume : [ '', Validators.required],
      intitule : [ '', Validators.required],
      dates : this.formBuilder.array([])
    });
  }

  onSubmit() {
    const resume = this.sondageForm.get('resume').value;
    const intitule = this.sondageForm.get('intitule').value;
    const dates = this.sondageForm.get('dates').value;
    console.log(this.sondageForm.value);

    const sondage = new Sondage(resume, intitule, this.user.id.toString(), dates);
    this.sondageService.editSondage(this.id, sondage).subscribe(
      (res ) => { console.log(res); }
    );
    this.router.navigate(['/sondages']);
  }

  getDates() {
    return this.sondageForm.get('dates') as FormArray ;
  }

  onAddDate() {
    const newDate = this.formBuilder.control(null, Validators.required);
    this.getDates().push(newDate);
  }

  onBack() {
    this.router.navigate(['/sondages']);
  }

}