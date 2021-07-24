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
    id: 2,
  },
  {
    title: "Third video",
    rating: 5,
    comments: 43,
    createdAt: "2 minuites ago",
    views: 1,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", {
    pageTitle: "Home",
    videos,
  });
};
export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watching: ${video.title}`,
    video,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", {
    pageTitle: `Editing: ${video.title}`,
    video,
  });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", {
    pageTitle: "Upload Video",
  });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "Just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
