const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    // sets up method to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },

        github: {
            type: DataTypes.STRING,
            allowNull: true
        },

        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [8]
          }
        }
      },
  {
      hooks: {
        // Before registering/creating, bcrypt hashes password
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 12);
            return newUserData;
        },
        // Before updating password bcrypt hashes 
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 12);
            return updatedUserData;
        }
      },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;