import React from "react";

function FeedbackUI() {
  return (
    <div className="w-full px-6 backdrop-blur-sm bg-white/30 py-4 mt-4 border-2 border-gray-200 rounded-md shadow-md">
      <div className="title flex flex-wrap">
        <div>Feedback Title | 5 ⭐</div>
        <div className="sm:ml-auto text-sm">06 Mar 2024</div>
      </div>
      <div className="mt-4 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, voluptate, autem, cumque laborum quidem doloribus
        exercitationem quos nemo quas voluptatibus magni. Quisquam voluptates,
        voluptate, autem, cumque laborum quidem doloribus exercitationem quos
        nemo quas voluptatibus magni.
      </div>
    </div>
  );
}

export default FeedbackUI;
