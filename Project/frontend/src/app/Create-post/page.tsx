import axios from "axios";
function CreatePost() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950">
      <div className="bg-[#0f0f0f] rounded-2xl w-[300px] p-7 flex flex-col items-center gap-5 border border-[#2a2a2a]">
        
        <h1 className="text-white text-lg font-medium tracking-wide">Create Post</h1>

        {/* File upload area */}
        <label className="w-full border-2 border-dashed border-[#333] rounded-xl py-6 flex flex-col items-center gap-2 cursor-pointer hover:border-[#555] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#555]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <p className="text-[#555] text-sm">Click to upload image</p>
          <p className="text-[#333] text-xs">PNG, JPG, WEBP</p>
          <input className="hidden" type="file" name="image" accept="image/*" />
        </label>

        {/* Caption input */}
        <input
          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white text-sm placeholder-[#444] outline-none focus:border-[#444] transition-colors"
          type="text"
          name="caption"
          placeholder="Write a caption…"
          required
        />

        {/* Submit button */}
        <button 
        onClick={handlesubmit}
          className="w-full bg-white text-[#0f0f0f] rounded-lg py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          type="submit"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;