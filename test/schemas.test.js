const 
      expect = require('chai').expect,
      user = require('../config/db_schemas/user.schema'),
      forum = require('../config/db_schemas/forum.schema');

describe('Forum user schema test', function() {
    it('should be invalid if required fields are empty', function(done) {
        const f = new user();

        f.validate(function(err) {
            expect(err.errors.username).to.exist;
            expect(err.errors.name).to.exist;
            expect(err.errors.email).to.exist;
            expect(err.errors.hashedPassword).to.exist;
            done();
        });
    });
});
 
describe('Forum post schema test', function() {
    it('should be invalid if required fields are empty', function(done) {
        const f = new forum();
 
        f.validate(function(err) {
            expect(err.errors.userID).to.exist;
            expect(err.errors.title).to.exist;
            expect(err.errors.bodyText).to.exist;
            expect(err.errors.editted).to.exist;
            expect(err.errors.upVotes).to.exist;
            expect(err.errors.downVotes).to.exist;
            done();
        });
    });
});