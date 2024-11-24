const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center h-fit py-6 sm:py-0 sm:h-[90vh] px-4 text-center space-y-6">
      <p className="uppercase text-sm text-gray-500 tracking-widest">Hi, friends, I'm Kene</p>

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Charming Influencer</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl italic">Fashion Lover</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">PROUD LAGOSIAN</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl italic">Graceful Campaign Model</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Passionate Youtuber</h1>
      </div>

      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed">
      Founder. Content Creator. Host. Model. Youtuber. Coach. Based in Lagos, Nigeria, I'm passionate about guiding others to attract and embrace the best in life. Through my content, I share insights on premium living, fashion, relationships, and personal growth.
      </p>
    </div>
  );
};

export default Intro;
