/**
 * Created by IlyaLitvinov on 12.03.16.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const PhoneModel = require('./phone');
const mongoose = require('mongoose');
const dbName = 'mobilestorev2-dev';

mongoose.connect(`mongodb://localhost/${dbName}`);

mongoose.set('debug', true);

class CollectionCreator {
  constructor(name) {
    this.name = name;
    this.data = null;
    this.init()
  }

  init () {
    mongoose.connection.on('open', () => {
      mongoose.connection.db.dropCollection('phones', (err, result) => {
        mongoose.connection.db.collections().then(res => {
          //todo create auto droping db if exist
          return this.createDb();
        })
      });
    })
  }

  createDb () {
    return this.readDir('phones').then(() => {
        return 'Successfully created!';
      })
      .catch(e => {
        console.log(e);
      })
  }

  importToDb (items) {
    const promises =[];

    items.forEach(item => {
      const model = new PhoneModel(item);
      
      promises.push(model.save())
    });

    return Promise.all(promises).then(res => {

      return res;
    }).catch(e => {
      console.log(e);
    })
  }

  readDir(dirname) {
    return new Promise((res, rej) => {
      const _path = __dirname + '/' + dirname + '/';

      fs.readdir(_path, (err, filenames) => {
        if (err) {
          rej(err);
        }

        const promises = [];

        filenames.forEach(item => {
          promises.push(new Promise((res, rej) => {

            fs.readFile(_path + item, 'utf-8', (err, file) => {
              if (err) {
                rej(err);
              }
              res(JSON.parse(file));
            })
          }))
        });

        return Promise.all(promises).then(data => {

          this.importToDb(data);
          res(data);
        }).catch(e => {
          rej(e);
        });
      })
    });
  }
}


const t = new CollectionCreator('phones');


