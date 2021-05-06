import React from 'react';
import Navbar from "./Navbar";
import Post from "./Post";
import api from '../mock_api';
import _ from   "lodash"

function Posts() {
    return (
        <div className='posts_container '>
            <Navbar/>
            <div className="articles_container">

                {
                  _.map(api,(article) => (
                      <Post  title={article.title}
                             content={article.content}
                             key = {article.title}
                      />)
                   )
                }
            </div>
        </div>
    );
}

export default Posts;