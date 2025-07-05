const TrustIndicators = () => {
  return (
    <section className="bg-foreground text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Sitejabber */}
          <div className="flex items-center justify-center space-x-3 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">⭐</span>
              </div>
              <span className="text-lg font-semibold">Sitejabber</span>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
                <span className="text-white/60">⭐</span>
              </div>
              <span className="text-sm text-white/80">4.7/5</span>
            </div>
          </div>
          
          {/* Reviews.io */}
          <div className="flex items-center justify-center space-x-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm">⭐</span>
              </div>
              <span className="text-lg font-semibold">Reviews.io</span>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <span className="text-sm text-white/80">4.9/5</span>
            </div>
          </div>
          
          {/* RankMyWriter */}
          <div className="flex items-center justify-center space-x-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📝</span>
              </div>
              <span className="text-lg font-semibold">RankMyWriter</span>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <span className="text-sm text-white/80">4.8/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;