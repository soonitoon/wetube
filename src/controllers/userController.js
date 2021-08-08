export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {};
export const login = (req, res) => res.send("Login");
export const edit = (req, res) => res.send("Edit user");
export const remove = (req, res) => res.send("Remove user");
export const logout = (req, res) => res.send("Logout user");
export const see = (req, res) => res.send("See user");
