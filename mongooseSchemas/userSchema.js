const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  organizationId: { type: String },
  firstName:      { type: String, required: true },
  lastName:       { type: String, required: true },
  email:          { type: String, required: true },
  streetAddress:  { type: String },
  city:           { type: String },
  state:          { type: String },
  zip:            { type: Number },
  country:        { type: String, enum: ['Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo, Democratic Republic of the','Congo, Republic of the','Costa Rica','Côte d’Ivoire','Croatia','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor-Leste)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea, South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia, Federated States of','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar (Burma)','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan, South','Suriname','Swaziland','Sweden','Switzerland','Taiwan','Tajikistan','Tanzania','Thailand','The Bahamas','The Gambia','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe']},
  },
  { timestamps: true })