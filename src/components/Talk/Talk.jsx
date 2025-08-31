import React from 'react';
import Interview from './interview/Interview';

const Talk = () => {
  return (
    <div
      className=" talk w-[97%] mx-auto mb-10 rounded-[12px] border-2 border-black bg-[url('https://t3.ftcdn.net/jpg/01/86/99/86/360_F_186998644_Vn139FQN8V5ex6Q9EmbsMjfwq7ApRkIn.jpg')] bg-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] text-white"
    >
      <h1 className="text-center mt-5 text-[3rem]">Talk With Professors</h1>

      <Interview
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s"
        name="lorem"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quaerat."
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex architecto, facere beatae cupiditate aut deserunt illo, id ea iste corporis doloremque error ullam dolore blanditiis veniam sint! Magnam fugiat porro culpa veniam tempora dignissimos, veritatis delectus laborum officiis, odio omnis? Eum eligendi, dolorem ex eius consequuntur maiores natus rem esse ducimus iure recusandae quasi repudiandae cum cupiditate nam, commodi enim? Reprehenderit quam ex sunt, harum, ratione, blanditiis minus ipsum ad impedit quisquam accusantium aut! Porro, odit inventore odio quaerat eum quos accusamus aspernatur nostrum harum dicta enim corrupti ullam officiis facere. Perspiciatis, a molestias architecto omnis reprehenderit numquam officiis non?"
        title="Lorem ipsum dolor sit amet."
      />

      <Interview
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s"
        name="lorem"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quaerat."
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex architecto, facere beatae cupiditate aut deserunt illo, id ea iste corporis doloremque error ullam dolore blanditiis veniam sint! Magnam fugiat porro culpa veniam tempora dignissimos, veritatis delectus laborum officiis, odio omnis? Eum eligendi, dolorem ex eius consequuntur maiores natus rem esse ducimus iure recusandae quasi repudiandae cum cupiditate nam, commodi enim? Reprehenderit quam ex sunt, harum, ratione, blanditiis minus ipsum ad impedit quisquam accusantium aut! Porro, odit inventore odio quaerat eum quos accusamus aspernatur nostrum harum dicta enim corrupti ullam officiis facere. Perspiciatis, a molestias architecto omnis reprehenderit numquam officiis non?"
        title="Lorem ipsum dolor sit amet."
      />
    </div>
  );
};

export default Talk;
