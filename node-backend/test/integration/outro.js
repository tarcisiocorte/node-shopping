describe('Routes Books', () => {
    const defaultBook ={
        id:2,
        name: 'Default Book'
    };

    console.log('book ddddddddddefault' + defaultBook.name);

    describe('Route Get /books', () => {
        if('should return a list of books', done =>{
            console.log('funfa??');
            request
                .get('/bookss')
                .end((err, res) => {
                    expect(res.body[1].name).to.be.eql(defaultBook.name);
                    done(err);
                });
        });        
    });
});