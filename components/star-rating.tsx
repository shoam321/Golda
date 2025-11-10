"use client"

interface StarRatingProps {
  value: number
  onChange: (value: number) => void
}

export default function StarRating({ value, onChange }: StarRatingProps) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-colors cursor-pointer font-bold ${
            value >= star ? "bg-yellow-300 border-yellow-300" : "bg-white border-gray-200"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  )
}
