const { Profile } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find();
        },
    profile: async (parent, { profileId }) => {
        return Profile.findOne({_id: profileId});
    },

    me: async (parent, args, context) => {
        if(context.user) {
            return Profile.findOne({_id: context.user._id})
        }
        throw AuthenticationError;
    }
   },

   Mutation: {
    addProfile: async (parent, {name, email, password }) => {
        const profile = await Profile.create({ name, email, password});
        const token = signToken(profile);

        return { token, profile };
    },
    login: async (parent, {email, password }) => {
        const profile = await Profile.findOne({ email, password });

        if(!profile){
            throw AuthenticationError
        }

        const correctPw = await profile.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signToken(profile)
        return { token, profile }
    },
    removeProfile: async (parent, args, context) => {
        if(context.user) {
            return Profile.findByIdAndDelete({ _id: context.user._id })
        }
        throw AuthenticationError
    }

   }
}