export default {
  database: 'shopping',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: `${process.env.NODE_ENV}_books.sqlite`,
    define: {
      underscored: true,
    },
  },
};

//on Linux you need to run export NODE_ENV=test
