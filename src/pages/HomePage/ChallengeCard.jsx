import React from 'react';

function ChallengeCard({ title, image, fullWidth = false }) {
  const cardClasses = `flex overflow-hidden flex-col items-center text-2xl font-bold text-center text-white rounded-md bg-slate-400 bg-opacity-50 ${
    fullWidth ? 'w-full' : 'w-full'
  }`;

  const containerClasses = fullWidth
    ? 'flex relative flex-col px-12 pt-96 pb-7 min-h-[510px] max-md:px-5 max-md:pt-24 max-md:max-w-full'
    : 'flex relative flex-col px-8 pt-40 pb-1.5 w-full aspect-square max-md:px-5 max-md:pt-24';

  return (
    <div className={cardClasses}>
      <div className={containerClasses}>
        <img loading="lazy" src={image} alt={title} className="object-cover absolute inset-0 size-full" />
        <div className="relative z-10">{title}</div>
      </div>
    </div>
  );
}

export default ChallengeCard;