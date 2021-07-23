let videos = [
  {
    title: "Soonitoon's video",
    rating: 5,
    comments: 43,
    createdAt: "2 minuites ago",
    views: 89,
    id: 1,
  },
  {
    title: "Second video",
    rating: 5,
    comments: 43,
    createdAt: "2 minuites ago",
    views: 89,
    id: 1,
  },
  {
    title: "Third video",
    rating: 5,
    comments: 43,
    createdAt: "2 minuites ago",
    views: 89,
    id: 1,
  },
];
export const trending = (req, res) => {
  res.render("home", {
    pageTitle: "Home",
    videos,
  });
};
export const see = (req, res) => {
  res.render("watch");
};
export const edit = (req, res) => {
  res.render("edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");
