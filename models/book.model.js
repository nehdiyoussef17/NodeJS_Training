

const Book = function(
    id, title, pages, date, image, description, authors, categories
){
    this.id = id;
    this.title = title;
    this.pages = pages;
    this.date = date;
    this.image = image;
    this.description = description;
    this.authors =authors;
    this.categories = categories;
}

Book.fromJson = function (object){
    return new Book(
        object.id,
        object.title,
        object.pageCount,
        new Date(object.publishedDate.date),
        object.thumbnailUrl,
        object.shortDescription,
        object.authors.join(" - "),
        object.categories.join(" - ")
    )
}

module.exports.Book = Book;