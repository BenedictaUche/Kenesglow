const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 text-center space-y-6">
      <p className="uppercase text-sm text-gray-500 tracking-widest">Hi, friends, I'm Kene</p>

      <div className="space-y-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">Reluctant Influencer</h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl italic">Fashion Lover</h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">LAGOS NATIVE</h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl italic">Delinquent Campaign Model</h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">Devoted Youtuber</h1>
      </div>

      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed">
      Founder. Content Creator. Host. Model. Youtuber. Coach. Based in Lagos, Nigeria, I'm passionate about guiding others to attract and embrace the best in life. Through my content, I share insights on premium living, fashion, relationships, and personal growth.
      </p>
    </div>
  );
};

export default Intro;
