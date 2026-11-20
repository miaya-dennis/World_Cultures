import { useState, useEffect } from 'react'


const CultureImages = [
"https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
"https://plus.unsplash.com/premium_photo-1682090840373-b06b5237ae74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
"https://images.unsplash.com/photo-1515658323406-25d61c141a6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
"https://plus.unsplash.com/premium_photo-1670267552055-8f33a55c1af0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
"https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
"https://images.unsplash.com/photo-1552385430-53e6f2028760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
"https://images.unsplash.com/photo-1715313210517-2dcc505740f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
"https://images.unsplash.com/photo-1600186435852-7927627afc62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
"https://images.unsplash.com/photo-1616386232566-80015c23aeff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
];

function CultureSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect (() => {
        const timer = setInterval (() => {
            setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % CultureImages.length);
        },  7000);

        return () => clearInterval (timer);
    }, []);


const PrevPhoto = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === 0  ? CultureImages.length - 1 : prevIndex - 1
);
};

const nextPhoto = () => {
    setCurrentIndex((prevIndex) =>
     prevIndex === CultureImages.length -1 ? 0 : prevIndex + 1
);
};

return(
    <div className="slideshow">
        <button onClick={PrevPhoto}>
            Previous</button>
      <img
        src={CultureImages[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="culture-photo"
      />
      
    
     <button onClick={nextPhoto}>
            Next</button>
    </div>
);
} 
export default CultureSlideshow
