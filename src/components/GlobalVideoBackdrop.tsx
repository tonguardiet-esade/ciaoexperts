/** Mismo asset que el hero principal: fondo animado unificado en el sitio. */
export const HERO_BACKGROUND_MP4 =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4';

const HERO_POSTER =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70';

type Props = {
  shouldReduceMotion?: boolean;
  /** Opacidad del velo encima del vídeo (0–1). Por defecto ~52% slate. */
  overlayClassName?: string;
};

export function GlobalVideoBackdrop({
  shouldReduceMotion = false,
  overlayClassName = 'bg-slate-950/52',
}: Props) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <img
        src={HERO_POSTER}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {!shouldReduceMotion && (
        <video
          className="pointer-events-none absolute inset-0 z-0 min-h-full min-w-full scale-[1.05] object-cover"
          src={HERO_BACKGROUND_MP4}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
        />
      )}
      <div className={`absolute inset-0 z-[1] ${overlayClassName}`} />
    </div>
  );
}
