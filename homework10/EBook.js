import  * as Book from './Book.js';

class EBook extends Book.book{
    constructor(name, author, year_of_publication, file_format){
        super(name,author,year_of_publication);
        this._file_format = file_format;
    }

    get file_format(){
        return this._file_format;
    }
    set file_format(value){
        if(value !== 'PDF'){
        console.log("file format must be pdf");
        return;
        }
        this._file_format = value;
    }

    printInfo(){
        console.log(`name book - ${this.name}, author ${this.author}, year of publication ${this.year_of_publication}, file_format: ${this._file_format}`)
    }
    
}

export {EBook};
