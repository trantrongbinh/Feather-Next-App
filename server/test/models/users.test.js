const mongoose = require('mongoose');

describe('Test model Users', () => {
  let connection;
  let userModel;

  beforeAll(async () => {
    // Setup mongodb in-memory db connection
    connection = await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });

    // Mock app.get, which is called is users.model.js to return in-memory db
    jest.mock('../../src/app', () => ({
      get: jest.fn(),
    }));
    const app = require('../../src/app');
    app.get.mockReturnValueOnce(mongoose);

    userModel = require('../../src/models/users.model')(app);
  });

  afterAll(async () => {
    // Close connection after end
    await connection.close();
  });

  afterEach(() => {
    // Before each test, drop collection to reset db to empty state
    userModel.collection.drop();
  });

  describe('Test validation and save', () => {
    it('save with valid data', async () => {
      const mockUser = {
        name: 'User',
        password: '123',
        email: 'user@example.com',
      };
      await userModel.create(mockUser);

      const insertedUser = await userModel.findOne();
      expect(insertedUser.name).toEqual(mockUser.name);
      expect(insertedUser._id).not.toBe(null);
    });

    it('finds user with the name of users', async () => {
      const mockUser = {
        name: 'test',
        password: '123',
        email: 'user@example.com',
      };

      await userModel.create(mockUser);
      const userDetail = await userModel.findOne({ name: 'test' });
      expect(userDetail.name).toEqual('test');
    });

    it('Delete a user', async () => {
      const mockUser = {
        name: 'test',
        password: '123',
        email: 'user@example.com',
      };

      await userModel.create(mockUser);
      await userModel.remove({ name: 'test' });
      const remainingUer = await userModel.find({});
      expect(remainingUer.length).toEqual(0);
    });

    it('Cannot save when email duplicated', async () => {
      expect.assertions(1);

      const mockUser = {
        name: 'test',
        password: '123',
        email: 'test@example.com',
      };
      const user = {
        name: 'thu',
        password: '123',
        email: 'test@example.com',
      };

      try {
        await userModel.ensureIndexes();
        await userModel.create(mockUser);
        await userModel.create(user);
      } catch (err) {
        expect(err.errmsg).toEqual('E11000 duplicate key error dup key: { : "test@example.com" }');
      }
    });

    it('cannot save when email is missing', async () => {
      expect.assertions(1);

      const mockUser = {
        name: 'test',
        password: '123',
      };

      try {
        await userModel.create(mockUser);
      } catch (err) {
        expect(err._message).toEqual('users validation failed');
      }
    });
  });
});
