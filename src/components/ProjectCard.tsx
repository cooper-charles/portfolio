type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  href: string;
};

export default function ProjectCard({title, image, description, technologies, href,}: ProjectCardProps) {
  return (
    <a href={href} target="_blank" className="relative block overflow-hidden rounded-2xl group transition-all duration-300 hover:shadow-xl">
      <img src={image} alt={`${title} screenshot`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"/>

      <div className="absolute bottom-0 left-0 z-10 w-full p-5 transition-transform duration-300 group-hover:-translate-y-2">
        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span key={technology} className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
              {technology}
            </span>
          ))}
        </div>

        <p className="mt-2">
          {description}
        </p>

        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100 group-hover:mt-3">
          <span className="font-semibold text-[#9AA6E8]">
            Learn more →
          </span>
        </div>
      </div>
    </a>
  );
}