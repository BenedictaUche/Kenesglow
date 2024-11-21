import viral from '../assets/images/viral.png';
import mercy from '../assets/images/mercy.png';
import cut from '../assets/images/cut-people.png';
import anikela from '../assets/images/anikela.png'

const Trending = () => {
  const items = [
    { number: '01', title: 'This Video Went Really Viral On TikTok', action: 'WATCH THE VIDEO', image: viral, link: 'https://www.tiktok.com/@kenesgloww/video/7367787794283973921?is_from_webapp=1&sender_device=pc&web_id=7424044708274439685' },
    { number: '02', title: 'My Episode With Mercy Eke On Love Is A Game Series', action: 'WATCH THE VIDEO', image: mercy, link: 'https://youtu.be/p7AeXmhPYNU?si=y0e40IORSnrUa8DV' },
    { number: '03', title: 'My Take On Calling People Out', action: 'WATCH THE VIDEO', image: cut, link: 'https://www.tiktok.com/@kenesgloww/video/7433871125668482337?is_from_webapp=1&sender_device=pc&web_id=7424044708274439685' },
    { number: '04', title: 'African Stars who were at the MET GALA - ANIKELA', action: 'READ THE POST', image: anikela, link: 'https://anikela.com/discover-ten-cool-brands-from-alaras-hijabi-exhibition/' },
  ];

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <p className="uppercase font-medium text-sm text-center mb-10">kene lately</p>

      {/* List Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Number */}
              <h1 className="text-[60px] md:text-[75px] font-bold">{item.number}</h1>

              {/* Title */}
              <h2 className="text-lg md:text-2xl capitalize font-semibold md:flex-1 text-center md:text-left">
                {item.title}
              </h2>

              {/* Action */}
              <a href={item.link} className="uppercase font-medium text-sm text-gray-600 whitespace-nowrap text-center md:text-left">
                {item.action}
              </a>

              {/* Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0">
                <img
                  src={item.image}
                  alt="Thumbnail"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Divider */}
            {index < items.length - 1 && (
              <hr className="border-t border-gray-300 mt-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
