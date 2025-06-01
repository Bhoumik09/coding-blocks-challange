import { Star } from "lucide-react"

export const StarRating: React.FC<{ rating?: number }> = ({ rating = 5 }) => {
    return (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`h-5 w-5 ${i < rating ? "fill-emerald-400 text-emerald-400" : "fill-gray-300 text-gray-300"}`}
                />
            ))}
        </div>
    )
}