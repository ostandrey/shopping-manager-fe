import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CreateListService} from './create-list.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  public listForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef <CreateListComponent>,
              private createListService: CreateListService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.listForm = this.formBuilder.group({
      ID: [this.data.ID],
      Name: [this.data.Name, [Validators.required]]
    });
  }

  onSubmit() {
    if (isNaN(this.data.ID)) {
      this.createListService.addList(this.listForm.value);
      this.dialogRef.close();
    } else {
      this.createListService.editList(this.listForm.value);
      this.dialogRef.close();
    }
  }
}
