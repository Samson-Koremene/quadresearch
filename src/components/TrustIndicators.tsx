import { Star } from "lucide-react";

const TrustIndicators = () => {
  const reviews = [
    {
      platform: "Sitejabber",
      rating: 4.7,
      maxRating: 5,
      bgColor: "bg-purple-600",
      textColor: "text-purple-600"
    },
    {
      platform: "Reviews.io", 
      rating: 4.9,
      maxRating: 5,
      bgColor: "bg-gray-900",
      textColor: "text-gray-900"
    },
    {
      platform: "RankMyWriter",
      rating: 4.8,
      maxRating: 5,
      bgColor: "bg-green-600", 
      textColor: "text-green-600"
    }
  ];

  const renderStars = (rating: number, maxRating: number) => {
    return Array.from({ length: maxRating }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) 
            ? 'text-yellow-500 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-background mb-2">Trusted by Students Worldwide</h3>
          <p className="text-gray-300">See what our customers say about us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-background rounded-xl p-6 text-center shadow-lg">
              <div className={`w-12 h-12 ${review.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              
              <h4 className="text-lg font-semibold text-foreground mb-2">{review.platform}</h4>
              
              <div className="flex items-center justify-center space-x-1 mb-2">
                {renderStars(review.rating, review.maxRating)}
              </div>
              
              <div className="text-2xl font-bold text-foreground mb-1">
                {review.rating}/{review.maxRating}
              </div>
              
              <p className="text-muted-foreground text-sm">Based on verified reviews</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;