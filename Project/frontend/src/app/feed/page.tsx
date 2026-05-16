"use client";
import { useState, useEffect } from "react";
import axios from "axios";


function FeedView() {
  const [feed, setFeed] = useState([]);
useEffect(() => {
    axios.get("http://localhost:3001/posts")
    .then((res)=>{
        console.log(res.data.Post)
        setFeed(res.data.Post)
    })
}, [])

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center py-8 px-4 gap-5">
      {feed.map((feed) => (
        <div
          key={feed.id}
          className="w-full max-w-[360px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#2a2a2a]"
        >
          <img
            src={feed.Image}
            alt={feed.Caption}
            className="w-full h-60 object-cover"
          />
          <div className="px-4 py-3 flex items-center justify-between">
            <p className="text-[#ccc] text-sm">{feed.Caption}</p>
            <div className="flex gap-4 items-center">
              <button className="text-[#555] hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
              <button className="text-[#555] hover:text-[#aaa] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedView;