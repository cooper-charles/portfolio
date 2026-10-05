type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  href: string;
};

export default function ProjectCard({
  title,
  image,
  description,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <a href={href} className="relative block overflow-hidden rounded-2xl group h-[330px] sm:h-auto sm:aspect-[16/9] transition-all duration-300 hover:shadow-xl">
      <img src={image} alt={`${title} screenshot`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 z-10 w-full p-4 sm:p-5 transition-transform duration-300 sm:group-hover:-translate-y-2">
        <h3 className="text-lg sm:text-xl font-bold leading-tight">
          {title}
        </h3>

        <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
          {technologies.map((technology) => (
            <span key={technology} className="rounded-md border border-white/20 px-2 py-1 text-xs sm:text-sm backdrop-blur-md">
              {technology}
            </span>
          ))}
        </div>

        <p className="mt-2 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        <div className="hidden sm:block max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100 group-hover:mt-3">
          <span className="font-semibold text-[#9AA6E8]">
            Learn more →
          </span>
        </div>
      </div>
    </a>
  );
}