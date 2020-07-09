module.exports = {
    login: (req, res, next) => {
        const { username, password } = req.body;
        res.json(req.body);
    },
    register: (req, res, next) => {
        const { username, password, confirmPassword, email, firstName, lastName, age, gender, birthday } = req.body;
        res.json(req.body);
    }
}