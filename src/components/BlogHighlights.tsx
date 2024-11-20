const BlogHighlights = () => {
    const posts = [
      {
        title: "Traveling in Style",
        image: "blog1.jpg",
        summary: "Top 10 destinations for fashion enthusiasts.",
      },
      {
        title: "Wardrobe Essentials",
        image: "blog2.jpg",
        summary: "Building your timeless capsule wardrobe.",
      },
    ];

    return (
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">From the Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden group"
              >
                <img
                  src={`/${post.image}`}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{post.title}</h3>
                  <p className="text-gray-600 mt-2">{post.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default BlogHighlights;
