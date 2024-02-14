import React from "react";
import SectionHead from "../_components/SectionHead";
import { Button } from "../../../../components/ui/button";
import FeedbackUI from "./_components/FeedbackUI";

function page() {
  return (
    <div className="px-5 sm:px-10 w-full overflow-y-scroll h-5/6">
      <SectionHead title="Feedback" />
      <div className="mt-6 px-4 mx-auto">
        <div className="form-control">
          <div className="label text-sm">Rate Us:</div>
          <div className="flex flex-wrap sm:items-center space-x-2  my-2">
            <Button className="text-sm mt-2">Poor</Button>
            <Button className="text-sm mt-2">1 ⭐</Button>
            <Button className="text-sm mt-2">2 ⭐</Button>
            <Button className="text-sm mt-2">3 ⭐</Button>
            <Button className="text-sm mt-2">4 ⭐</Button>
            <Button className="text-sm mt-2">5 ⭐</Button>
            <Button className="text-sm mt-2">Excellent</Button>
          </div>
        </div>
        <div className="form-control my-4">
          <div className="label text-sm">Title:</div>
          <input
            className="input my-2 border border-gray-300 rounded-md w-full px-3 py-2 text-sm"
            placeholder="Please enter your feedback title..."
          />
        </div>

        <div className="form-control my-4">
          <div className="label text-sm">Tell us what you feel?:</div>
          <textarea
            className="textarea h-24 my-2 border border-gray-300 rounded-md w-full px-3 py-2 text-sm"
            placeholder="Please enter your feedback here..."
          ></textarea>
        </div>
        <div>
          <Button className="text-sm ">Submit</Button>
        </div>
      </div>
      <div className="mt-6 ">
        <SectionHead title="Recent Feedbacks" />
        <div className="mt-6 px-4 mx-auto">
          <FeedbackUI />
          <FeedbackUI />
          <FeedbackUI />
          <FeedbackUI />
        </div>
      </div>
    </div>
  );
}

export default page;
