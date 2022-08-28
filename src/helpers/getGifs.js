
  export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=JKTScCNLA4s1c8LLz8Q4B4QiqMtRRS3L&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    
    return gifs;

  }