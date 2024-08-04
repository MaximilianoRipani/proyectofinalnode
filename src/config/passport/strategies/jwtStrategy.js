import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import varenv from "../../../dotenv.js"; 
import { userModel } from "../../../models/user.js";

const cookieExtractor = req => {
    const token = req.cookies ? req.cookies.jwtCookie : {};
    return token;
};

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: varenv.jwt_secret 
};

export const strategyJWT = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await userModel.findById(payload.user._id);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    } catch (e) {
        return done(e, null);
    }
});
