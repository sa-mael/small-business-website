import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, ThumbsUp } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface Comment {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  helpful: number;
  variant?: string;
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: "Alex Turner",
    rating: 5,
    date: "2025-01-15",
    text: "Absolutely incredible design! The STL files were perfectly optimized - printed flawlessly on my Ender 3. The assembly instructions are clear and detailed. The final product looks amazing on my desk. Worth every penny!",
    helpful: 23,
  },
  {
    id: 2,
    author: "Sarah Chen",
    rating: 5,
    date: "2025-01-12",
    text: "Best 3D printable lamp I've ever made. The modular design made printing easy, and the RGB integration is brilliant. Customer support was super helpful with my wiring questions. Highly recommend!",
    helpful: 18,
  },
  {
    id: 3,
    author: "Marcus Rodriguez",
    rating: 4,
    date: "2025-01-08",
    text: "Great design overall. Print time was about 60 hours total on my Prusa. Only minor issue was needing to scale down one piece slightly for my build plate. The end result is stunning though!",
    helpful: 12,
  },
  {
    id: 4,
    author: "Emily Watson",
    rating: 5,
    date: "2025-01-05",
    text: "This lamp is a showstopper! Everyone who visits asks where I got it. The cyberpunk aesthetic is perfect. Files are well-organized and the assembly manual is very professional. 10/10 would buy again.",
    helpful: 31,
  },
  {
    id: 5,
    author: "David Kim",
    rating: 5,
    date: "2024-12-28",
    text: "Bought the pre-assembled version and it arrived perfectly packaged. The build quality is exceptional and the RGB effects are mesmerizing. Can't wait to see what other designs they release!",
    helpful: 15,
    variant: "Pre-Assembled",
  },
  {
    id: 6,
    author: "Lisa Anderson",
    rating: 4,
    date: "2024-12-22",
    text: "Beautiful design and great instructions. Used PLA+ as recommended and it came out great. The only challenge was the LED installation, but the wiring guide helped a lot. Very satisfied!",
    helpful: 9,
  },
];

export function Comments() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState({ name: "", rating: 5, text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comment: Comment = {
      id: comments.length + 1,
      author: newComment.name,
      rating: newComment.rating,
      date: new Date().toISOString().split('T')[0],
      text: newComment.text,
      helpful: 0,
    };
    setComments([comment, ...comments]);
    setNewComment({ name: "", rating: 5, text: "" });
    toast.success("Thank you for your review!");
  };

  const handleHelpful = (id: number) => {
    setComments(comments.map(c => 
      c.id === id ? { ...c, helpful: c.helpful + 1 } : c
    ));
    toast.success("Thanks for your feedback!");
  };

  const averageRating = (comments.reduce((acc, c) => acc + c.rating, 0) / comments.length).toFixed(1);

  return (
    <section id="comments" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(var(--primary-rgb),0.05)] to-black" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="tracking-widest text-[var(--primary-color)] mb-4 text-3xl md:text-4xl">
            CUSTOMER REVIEWS
          </h2>
          <div className="flex items-center justify-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.round(parseFloat(averageRating))
                      ? 'fill-[var(--primary-color)] text-[var(--primary-color)]'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-white">
              {averageRating} out of 5
            </span>
            <span className="text-gray-500">
              ({comments.length} reviews)
            </span>
          </div>
        </div>

        {/* Add Review Form */}
        <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-white text-xl">Write a Review</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                  required
                  className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                />
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Rating:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewComment({ ...newComment, rating: star })}
                      >
                        <Star
                          className={`w-6 h-6 cursor-pointer transition-colors ${
                            star <= newComment.rating
                              ? 'fill-[var(--primary-color)] text-[var(--primary-color)]'
                              : 'text-gray-600 hover:text-gray-400'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <Textarea
                placeholder="Share your experience..."
                value={newComment.text}
                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                required
                rows={4}
                className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
              />
              <Button
                type="submit"
                className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 text-white"
              >
                Submit Review
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <Card
              key={comment.id}
              className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm"
            >
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Avatar className="w-12 h-12 bg-[rgba(var(--primary-rgb),0.3)]">
                    <AvatarFallback className="text-[var(--primary-color)] bg-transparent">
                      {comment.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-white font-semibold">{comment.author}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{new Date(comment.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                          {comment.variant && (
                            <>
                              <span>•</span>
                              <span className="text-[var(--primary-color)]">{comment.variant}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= comment.rating
                                ? 'fill-[var(--primary-color)] text-[var(--primary-color)]'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 text-base">{comment.text}</p>
                    <button
                      onClick={() => handleHelpful(comment.id)}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({comment.helpful})
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
