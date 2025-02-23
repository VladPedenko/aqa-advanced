import  * as Book from './Book.js';
import  * as EBook from './EBook.js';

//task1
const book1 = new Book.book("knyga1","Dmytro",1956);
book1.printInfo();
const book2 = new Book.book("knyga2","Vadym",2005);
book2.printInfo();
const book3 = new Book.book("knyga3","Vlad",2020);
book3.printInfo();

//task2

const Ebook1 = new EBook.EBook("knyga","Dmytro",1956,"PDF");
Ebook1.printInfo();

//task3
book1.name = 2;
book1.author = 5;
book1.year_of_publication = 'year';
Ebook1.file_format = 'TXT';

//task4
Book.book.TheOldestBook([
    new EBook.EBook("knyga1","Dmytro",1956,"PDF"),
    new EBook.EBook("knyga2","Vadym",2005,"PDF"),
    new EBook.EBook("knyga3","Vlad",2020,"PDF")
]);

