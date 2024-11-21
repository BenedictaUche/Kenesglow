import viral from '../assets/images/viral.png';

const Trending = () => {
  const items = [
    { number: '01', title: 'This Video Went Really Viral On TikTok', action: 'WATCH THE VIDEO' },
    { number: '02', title: 'My Episode on Goal Digger Podcast', action: 'LISTEN TO THE POD' },
    { number: '03', title: 'The Hair Trick You 100% Need In Your Life', action: 'READ THE POST' },
    { number: '04', title: 'My Scent Collab with Byredo Went Live!', action: 'CHECK IT OUT' },
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
              <h2 className="text-lg md:text-2xl font-semibold md:flex-1 text-center md:text-left">
                {item.title}
              </h2>

              {/* Action */}
              <p className="uppercase font-medium text-sm text-gray-600 whitespace-nowrap text-center md:text-left">
                {item.action}
              </p>

              {/* Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0">
                <img
                  src={viral}
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
