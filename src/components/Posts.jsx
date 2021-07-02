import React from 'react'
import sanityClient from '../client'
import '../components/css/Posts.css'
import {Link} from 'react-router-dom'
export default function Posts() {
    const [postData, setPostData] = React.useState(null);
    console.log(postData);
    React.useEffect(() => {
        sanityClient.fetch(`*[_type=="post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data) => setPostData(data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="container">
            <div className="articles">
                {postData && postData.map(post => (
                      <div className="article" key={post.slug.current}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                           <Link to="/"><button className="btn">{post.title}</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
