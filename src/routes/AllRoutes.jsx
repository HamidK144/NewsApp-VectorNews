const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/topstories" element={<TopStories />} />
      <Route path="/" element={<TopStories />} />
      <Route path="*" element={<NotExistMsg />} />
      <Route path="/topics/:name" element={<Topics />} />
    </Routes>
  );
};

export default AllRoutes;
