import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {

  formInput = {
    title: '',
    rating: '',
    imgUrl: '',
    Location: '',
  };
  constructor() { }

  ngOnInit() {
  }


  onRatingClick(val) {
    this.formInput.rating = val;
  }

  onImageSave() {
    //actions to store image locally and later do post calls
  }

  onImageCancel() {
    this.formInput.imgUrl = '';
  }
  setLocation() {
    //gps lcoation saved in formInput.location
  }
  onSubmit() {
    //for now I'm logging it but actual calls will post the data to sever
    console.log(this.formInput);
  }
  onFileChanged(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formInput.imgUrl = reader.result as string;
      };
    }
  }
}
