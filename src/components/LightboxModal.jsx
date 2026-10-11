import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function LightboxModal({ isOpen, src, alt, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:-right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 transition flex items-center justify-center backdrop-blur-md shadow-lg"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Frame */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 max-h-[78vh] flex items-center justify-center">
          <img
            src={src}
            alt={alt || 'Clinical Visual'}
            className="max-h-[78vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="mt-3.5 text-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-semibold max-w-lg">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
