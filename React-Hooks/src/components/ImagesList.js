import { useState, useEffect } from "react";

const ImagesList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setImages((prewState) => [...prewState, ...data]);
        setLoading(false);
      });
  }, [page]);

  const handleShowMore = () => {
    setPage(page + 1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <h1 className="header">Image Gallery</h1>
      <ul >
        {images.map(({ id, download_url }) => (
          <li  key={id}>
            <img src={download_url} alt="#"></img>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={handleShowMore}>Show more</button>
      </div>
    </>
  );
};

export default ImagesList;
