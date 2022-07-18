import { Component } from '@angular/core';
import {BookService } from '../bookservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-book',
  templateUrl:'./book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  pageTitle: string = 'Book List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  book=[{
    bookId :'',
    bookName:'',
    bookCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private bookService: BookService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.bookService.getBook().subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }
 
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteProduct(book._id)
      .subscribe((data) => {
        this.book = this.book.filter(p => p !== book);
      })
  

  }
}
  