describe('Routes Books', () => {
    const Books = app.datasource.models.Books,
     defaultBooks = {
        id:1,
        name: 'Default Book'
    };

    beforeEach(done => {
        Books
        .destroy({where:{}})
        .then(() => Books.create(defaultBook))
        .then(() =>{
            done();
        });
    });

    describe('Route GET /books', () => {
        if('should return a list of books', done =>{
            request
            .get('/books')
            .end((err, res) =>{

                expect(res.body[0].id).to.be.eql(defaultBooks.id);
                expect(res.body[0].name).to.be.eql(defaultBooks.name);
                
                done(err);
            });
        });
    });

    describe('Route GET /books/{id}', () => {
        if('should return a book', done =>{
            request
            .get('/books/1')
            .end((err, res) =>{

                expect(res.body[0].id).to.be.eql(defaultBooks.id);
                expect(res.body[0].name).to.be.eql(defaultBooks.name);
                
                done(err);
            });
        });
    });

});