import './RatingStar.css';

export const RatingStars = ({ rating, totalStars = 5 }) => {
    return (
        <div className="rating-stars">
            {[...Array(totalStars)].map((_, index) => {
                const starIndex = index + 1;
                return (
                    <span key={index} className={starIndex <= rating ? 'star filled' : 'star'}>
                        ★
                    </span>
                );
            })}
        </div>
    );
};
