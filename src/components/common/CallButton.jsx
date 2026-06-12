'use client';

export default function CallButton({
  className = '',
  label = '📞 Call: +91 88895 39174',
  size = 'md',
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'phone_click' });
    }
  };

  return (
    <a
      href="tel:+918889539174"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors ${sizeClasses[size]} ${className}`}
    >
      {label}
    </a>
  );
}
