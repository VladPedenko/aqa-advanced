class Book{
    constructor(name, author, year_of_publication){
        this._name = name;
        this._author = author;
        this._year_of_publication = year_of_publication
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(typeof value !== 'string'){
        console.log("name is not a string");
        return;
        }
        this._name = value;
    }
    get author(){
        return this._author;
    }
    set author(value){
        if(typeof value !== 'string'){
        console.log("author is not a string");
        return;
        }
        this._author = value;
    }
    get year_of_publication(){
        return this._year_of_publication;
    }
    set year_of_publication(value){
        if(typeof value !== 'number'){
        console.log("year of publication is not a number");
        return;
        }
        this._year_of_publication = value;
    }

    printInfo(){
        console.log(`name book - ${this._name}, author ${this._author}, year of publication ${this._year_of_publication}`)
    }
    static TheOldestBook(BookList){
        for (const book of BookList){
            console.log(book._year_of_publication);   
            }
    }
}

exports.book = Book;
