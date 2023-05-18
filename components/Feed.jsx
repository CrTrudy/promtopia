'use client';
import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='mt-16 prompt_lauyout'>
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )

};

const Feed = () => {
    const [searchText, setSearchText] = useState({
        text: null,
    });
    const [allPosts, setPosts] = useState([]);

    const handleSearchChange = (e) => {
        
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/app/api/prompt');
            const data = await response.json();
        
            setPosts(data);
        }
        fetchPosts();
    }, []);
    const handleTagClick = (tagName) => {
        setSearchText(tagName);
    
        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
      };

  return (
    <section className='feed'>
        <form className='relative w-full flex-center'>
            <input 
                type="text" 
                placeholder='Search for a tag or username'
                value={searchText.text}
                onChange={(event) => setSearchText({ ...searchText, text: event.target.value })}
                required
                className='search_input peer'
            />
        </form>
        {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  )
}

export default Feed
