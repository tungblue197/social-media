const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken('Authentication'),
    secretOrKey: process.env.TOKEN_KEY
}

const validAuth = (payload, done) => {
    console.log(payload);
    return done(null,false);
}

passport.use(new JwtStrategy(options,validAuth))