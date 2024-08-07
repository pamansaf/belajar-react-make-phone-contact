import React, { useState } from "react";

const Integer = () => {
  // let like = 0;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDislike = () => {
    setDislike(dislike + 1);
  };

  return (
    <div className=" border-t border-indigo-500 py-4">
      <h3 className="font-bold">Use State = Integer / numerik</h3>
      <h3>
        Like : {like} / Dislike : {dislike}
      </h3>
      <button onClick={handleLike} className="btn mt-4 mr-2">
        Like
      </button>
      <button onClick={handleDislike} className="btn mt-4">
        Dislike
      </button>
    </div>
  );
};

export default Integer;
