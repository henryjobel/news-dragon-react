import { Link } from "react-router-dom";


const NewsCrad = ({news}) => {
    const {title,thumbnail_url,author,image_url,details,_id} = news;
    return (
        <div>
            <div className='flex gap-3 bg-gray-200'>
                <img className='w-[40px]' src={author.img} alt="" />
                <div>
                <h1 className='text-base font-semibold'>{author.name}</h1>
                <p>{author.published_date}</p>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold w-[514px] pt-4'>{title}</h1>
                <img className='pt-5' src={image_url} alt="" />

                <p className='w-[518px] pt-6'>
                    {
                        details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`}
                        className="text-blue-600 font-semibold">Read More..</Link> </p>:
                        <p>{details}</p>
                    }
                </p>
            </div>
        </div>
    );
};

export default NewsCrad;