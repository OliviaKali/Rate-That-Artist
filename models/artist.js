module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    artistPic: {
      type: DataTypes.STRING
    }

  });

  Artist.associate = function(models) {
    Artist.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Artist;
};