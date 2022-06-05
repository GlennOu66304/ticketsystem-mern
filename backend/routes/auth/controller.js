import UserModel from "../../models/User.js";

// import passowrd hash
import bcrypt from "bcrypt";

export default {
  register: (req, res) => {
    UserModel.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res.status(400).json({ email: "邮箱已经被注册" });
      }
      const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      //   // b,password need to be decoded as hash value;
      //   const salt =  bcrypt.genSalt(10);
      //   const hashedpassword =  bcrypt.hash(newUser.password, salt);

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => res.json(user));
        });
      });
    });
  },

  signin: (req, res) => {
    //  validate the login
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      res.status(400).json(errors);
    }
    // get the email and password from the req.body, then assing a value
    const email = req.body.email;
    const password = req.body.password;
    //  a.find the email (Social Media login):Findone

    UserModel.findOne({ email }).then((user) => {
      // promise(then) if not find, then return a error
      if (!user) {
        return res.status(404).json({ email: "用户不存在" });
      }

      // b.compaire the password: password hash then compare password, hash else
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // c.login:succsss login value
          // d.return a token (andy MERN Start)
          // res.status(200).json({ msg: "succsss" });
          // user id in the database
          const rule = { id: user.id, name: user.name };

          // jwt token generate
          jwt.sign(rule, privateKey, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;

            res.json({
              succsss: true,
              // bearer to verify the token:change the mr wu token to bearer
              token: "Bearer " + token,
            });
          });
        }
      });
    });
  },
};
