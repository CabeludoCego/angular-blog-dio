import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentPhoto: string = ""
  
  contentTitle:string = ""
  
  contentDescription:string = ""
  private id:string | null= "0"
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("Id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    console.log(dataFake);
    
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.contentPhoto = result.photo
    // if (!result){
    //   this.contentTitle = result.title
    // }
  }
}
